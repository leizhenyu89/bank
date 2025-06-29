package com.ywang.bank.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.service.BankTransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.io.ClassPathResource;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TestDataGeneratorTest {

    @Mock
    private BankTransactionService transactionService;

    @Mock
    private ObjectMapper objectMapper;

    @Mock
    private ClassPathResource classPathResource;

    @InjectMocks
    private TestDataGenerator testDataGenerator;

    private List<Transaction> mockExistingTransactions;
    private List<TransactionDTO> mockTestData;

    @BeforeEach
    void setUp() {
        // Setup mock existing transactions
        mockExistingTransactions = Arrays.asList(
            createMockTransaction(1L, "Existing Transaction 1", "100.00", TransactionType.INCOME),
            createMockTransaction(2L, "Existing Transaction 2", "50.00", TransactionType.EXPENSE)
        );

        // Setup mock test data
        mockTestData = Arrays.asList(
            createMockTransactionDTO("Test Transaction 1", "200.00", "INCOME", "user1"),
            createMockTransactionDTO("Test Transaction 2", "150.00", "EXPENSE", "user2"),
            createMockTransactionDTO("Test Transaction 3", "300.00", "INCOME", "user3")
        );
    }

    @Test
    void testRun_WithGenerateTestDataFlag_ShouldGenerateData() throws Exception {
        // Arrange
        String[] args = {"--generate-test-data"};
        
        when(transactionService.listAll()).thenReturn(mockExistingTransactions);
        when(transactionService.create(any(TransactionDTO.class)))
            .thenAnswer(invocation -> {
                TransactionDTO dto = invocation.getArgument(0);
                return createMockTransaction(3L, dto.getDescription(), dto.getAmount(), 
                    TransactionType.valueOf(dto.getType()));
            });
        
        // Mock JSON loading
        mockJsonLoading();

        // Act
        testDataGenerator.run(args);

        // Assert
        verify(transactionService, times(2)).listAll(); // Called once at start, once for summary
        verify(transactionService, times(2)).delete(anyLong()); // Delete existing transactions
        verify(transactionService, times(3)).create(any(TransactionDTO.class)); // Create new transactions
    }

    @Test
    void testRun_WithoutGenerateTestDataFlag_ShouldNotGenerateData() throws Exception {
        // Arrange
        String[] args = {"--other-flag"};

        // Act
        testDataGenerator.run(args);

        // Assert
        verify(transactionService, never()).listAll();
        verify(transactionService, never()).create(any(TransactionDTO.class));
    }

    @Test
    void testRun_WithEmptyArgs_ShouldNotGenerateData() throws Exception {
        // Arrange
        String[] args = {};

        // Act
        testDataGenerator.run(args);

        // Assert
        verify(transactionService, never()).listAll();
        verify(transactionService, never()).create(any(TransactionDTO.class));
    }

    @Test
    void testRun_WithNoExistingData_ShouldOnlyCreateNewData() throws Exception {
        // Arrange
        String[] args = {"--generate-test-data"};
        
        when(transactionService.listAll()).thenReturn(List.of());
        when(transactionService.create(any(TransactionDTO.class)))
            .thenAnswer(invocation -> {
                TransactionDTO dto = invocation.getArgument(0);
                return createMockTransaction(1L, dto.getDescription(), dto.getAmount(), 
                    TransactionType.valueOf(dto.getType()));
            });
        
        mockJsonLoading();

        // Act
        testDataGenerator.run(args);

        // Assert
        verify(transactionService, times(2)).listAll(); // Called once at start, once for summary
        verify(transactionService, never()).delete(anyLong()); // No existing data to delete
        verify(transactionService, times(3)).create(any(TransactionDTO.class));
    }

    @Test
    void testRun_WhenCreateTransactionFails_ShouldContinueWithOtherTransactions() throws Exception {
        // Arrange
        String[] args = {"--generate-test-data"};
        
        when(transactionService.listAll()).thenReturn(List.of());
        when(transactionService.create(any(TransactionDTO.class)))
            .thenThrow(new RuntimeException("Database error"))
            .thenAnswer(invocation -> {
                TransactionDTO dto = invocation.getArgument(0);
                return createMockTransaction(1L, dto.getDescription(), dto.getAmount(), 
                    TransactionType.valueOf(dto.getType()));
            });
        
        mockJsonLoading();

        // Act
        testDataGenerator.run(args);

        // Assert
        verify(transactionService, times(3)).create(any(TransactionDTO.class));
        // Should continue processing even after first failure
    }

    @Test
    void testLoadTestDataFromJson_ShouldReturnCorrectData() throws Exception {
        // Arrange
        Map<String, List<Map<String, Object>>> mockData = Map.of(
            "transactions", Arrays.asList(
                Map.of(
                    "description", "Test Transaction",
                    "amount", "100.00",
                    "type", "INCOME",
                    "createUser", "testuser"
                )
            )
        );

        when(objectMapper.readValue(any(InputStream.class), any(TypeReference.class)))
            .thenReturn(mockData);

        // Act
        List<TransactionDTO> result = testDataGenerator.loadTestDataFromJson();

        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Test Transaction", result.get(0).getDescription());
        assertEquals("100.00", result.get(0).getAmount());
        assertEquals("INCOME", result.get(0).getType());
        assertEquals("testuser", result.get(0).getCreateUser());
    }

    @Test
    void testLoadTestDataFromJson_WhenIOException_ShouldThrowRuntimeException() throws Exception {
        // Arrange
        when(objectMapper.readValue(any(InputStream.class), any(TypeReference.class)))
            .thenThrow(new IOException("File not found"));

        // Act & Assert
        assertThrows(RuntimeException.class, () -> {
            testDataGenerator.loadTestDataFromJson();
        });
    }

    @Test
    void testMapToTransactionDTO_ShouldMapCorrectly() {
        // Arrange
        Map<String, Object> data = Map.of(
            "description", "Test Transaction",
            "amount", "100.00",
            "type", "INCOME",
            "createUser", "testuser"
        );

        // Act
        TransactionDTO result = testDataGenerator.mapToTransactionDTO(data);

        // Assert
        assertEquals("Test Transaction", result.getDescription());
        assertEquals("100.00", result.getAmount());
        assertEquals("INCOME", result.getType());
        assertEquals("testuser", result.getCreateUser());
    }

    @Test
    void testMapToTransactionDTO_WithNullValues_ShouldHandleGracefully() {
        // Arrange
        Map<String, Object> data = new HashMap<>();
        data.put("description", null);
        data.put("amount", null);
        data.put("type", null);
        data.put("createUser", null);

        // Act
        TransactionDTO result = testDataGenerator.mapToTransactionDTO(data);

        // Assert
        assertNull(result.getDescription());
        assertNull(result.getAmount());
        assertNull(result.getType());
        assertNull(result.getCreateUser());
    }

    private Transaction createMockTransaction(Long id, String description, String amount, TransactionType type) {
        Transaction transaction = new Transaction();
        transaction.setId(id);
        transaction.setDescription(description);
        transaction.setAmount(new BigDecimal(amount));
        transaction.setType(type);
        transaction.setCreateTime(Instant.now());
        transaction.setUpdateTime(Instant.now());
        transaction.setCreateUser("testuser");
        transaction.setUpdateUser("testuser");
        return transaction;
    }

    private TransactionDTO createMockTransactionDTO(String description, String amount, String type, String createUser) {
        TransactionDTO dto = new TransactionDTO();
        dto.setDescription(description);
        dto.setAmount(amount);
        dto.setType(type);
        dto.setCreateUser(createUser);
        return dto;
    }

    private void mockJsonLoading() throws IOException {
        String mockJson = """
            {
                "transactions": [
                    {
                        "description": "Test Transaction 1",
                        "amount": "200.00",
                        "type": "INCOME",
                        "createUser": "user1"
                    },
                    {
                        "description": "Test Transaction 2",
                        "amount": "150.00",
                        "type": "EXPENSE",
                        "createUser": "user2"
                    },
                    {
                        "description": "Test Transaction 3",
                        "amount": "300.00",
                        "type": "INCOME",
                        "createUser": "user3"
                    }
                ]
            }
            """;
        
        InputStream mockInputStream = new ByteArrayInputStream(mockJson.getBytes());
        
        Map<String, List<Map<String, Object>>> mockData = Map.of(
            "transactions", Arrays.asList(
                Map.of("description", "Test Transaction 1", "amount", "200.00", "type", "INCOME", "createUser", "user1"),
                Map.of("description", "Test Transaction 2", "amount", "150.00", "type", "EXPENSE", "createUser", "user2"),
                Map.of("description", "Test Transaction 3", "amount", "300.00", "type", "INCOME", "createUser", "user3")
            )
        );
        
        when(objectMapper.readValue(any(InputStream.class), any(TypeReference.class)))
            .thenReturn(mockData);
    }
} 