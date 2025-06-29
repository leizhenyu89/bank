package com.ywang.bank.controller;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.exception.ConcurrentModificationException;
import com.ywang.bank.exception.ResourceNotFoundException;
import com.ywang.bank.service.BankTransactionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class TransactionalControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @MockitoBean
    private BankTransactionService transactionService;

    private String getBaseUrl() {
        return "http://localhost:" + port;
    }

    private Transaction createTestTransaction() {
        Transaction tx = new Transaction();
        tx.setId(1L);
        tx.setDescription("Test Transaction");
        tx.setAmount(new BigDecimal("123.45"));
        tx.setType(TransactionType.INCOME);
        tx.setCreateUser("testuser");
        tx.setCreateTime(Instant.now());
        return tx;
    }

    private TransactionDTO createTestTransactionDTO() {
        TransactionDTO dto = new TransactionDTO();
        dto.setDescription("Test Transaction");
        dto.setAmount("123.45");
        dto.setType("INCOME");
        dto.setCreateUser("testuser");
        return dto;
    }

    @Test
    public void testCreateTransaction() throws Exception {
        Transaction tx = createTestTransaction();
        when(transactionService.create(any(TransactionDTO.class))).thenReturn(tx);

        TransactionDTO dto = createTestTransactionDTO();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TransactionDTO> entity = new HttpEntity<>(dto, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions",
                HttpMethod.POST,
                entity,
                String.class
        );

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).create(any(TransactionDTO.class));
    }

    @Test
    public void testCreateTransactionWithInvalidData() throws Exception {
        TransactionDTO dto = createTestTransactionDTO();
        dto.setAmount("invalid");
        when(transactionService.create(any(TransactionDTO.class)))
                .thenThrow(new IllegalArgumentException("Invalid amount"));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TransactionDTO> entity = new HttpEntity<>(dto, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions",
                HttpMethod.POST,
                entity,
                String.class
        );

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        verify(transactionService).create(any(TransactionDTO.class));
    }

    @Test
    public void testGetAllTransactions() {
        List<Transaction> transactions = Arrays.asList(createTestTransaction());
        when(transactionService.listAll()).thenReturn(transactions);

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions",
                HttpMethod.GET,
                entity,
                String.class
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).listAll();
    }

    @Test
    public void testGetTransactionById() {
        Transaction tx = createTestTransaction();
        when(transactionService.findById(1L)).thenReturn(tx);

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/1",
                HttpMethod.GET,
                entity,
                String.class
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).findById(1L);
    }

    @Test
    public void testGetTransactionByIdNotFound() {
        when(transactionService.findById(999999L))
                .thenThrow(new ResourceNotFoundException("Transaction not found"));

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/999999",
                HttpMethod.GET,
                entity,
                String.class
        );

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction not found"));
        verify(transactionService).findById(999999L);
    }

    @Test
    public void testGetTransactionsListWithoutType() {
        List<Transaction> transactions = Arrays.asList(createTestTransaction());
        Page<Transaction> page = new PageImpl<>(transactions);
        when(transactionService.pageQuery(0, 10, null)).thenReturn(page);

        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/list")
                .queryParam("page", 0)
                .queryParam("size", 10)
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).pageQuery(0, 10, null);
    }

    @Test
    public void testGetTransactionsListWithValidType() {
        List<Transaction> transactions = Arrays.asList(createTestTransaction());
        Page<Transaction> page = new PageImpl<>(transactions);
        when(transactionService.pageQuery(0, 10, TransactionType.INCOME)).thenReturn(page);

        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/list")
                .queryParam("page", 0)
                .queryParam("size", 10)
                .queryParam("type", "INCOME")
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).pageQuery(0, 10, TransactionType.INCOME);
    }

    @Test
    public void testGetTransactionsListWithInvalidType() {
        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/list")
                .queryParam("page", 0)
                .queryParam("size", 10)
                .queryParam("type", "INVALID_TYPE")
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        verify(transactionService, never()).pageQuery(anyInt(), anyInt(), any());
    }

    @Test
    public void testUpdateTransaction() throws Exception {
        Transaction tx = createTestTransaction();
        when(transactionService.update(eq(1L), any(TransactionDTO.class))).thenReturn(tx);

        TransactionDTO dto = createTestTransactionDTO();
        dto.setUpdateUser("updateuser");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TransactionDTO> entity = new HttpEntity<>(dto, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/1",
                HttpMethod.PUT,
                entity,
                String.class
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Test Transaction"));
        verify(transactionService).update(eq(1L), any(TransactionDTO.class));
    }

    @Test
    public void testUpdateTransactionNotFound() throws Exception {
        when(transactionService.update(eq(999L), any(TransactionDTO.class)))
                .thenThrow(new ResourceNotFoundException("Transaction not found"));

        TransactionDTO dto = createTestTransactionDTO();
        dto.setUpdateUser("updateuser");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TransactionDTO> entity = new HttpEntity<>(dto, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/999",
                HttpMethod.PUT,
                entity,
                String.class
        );

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction not found"));
        verify(transactionService).update(eq(999L), any(TransactionDTO.class));
    }

    @Test
    public void testUpdateTransactionWithConcurrentModification() throws Exception {
        when(transactionService.update(eq(1L), any(TransactionDTO.class)))
                .thenThrow(new ConcurrentModificationException("Transaction was modified by other users"));

        TransactionDTO dto = createTestTransactionDTO();
        dto.setUpdateUser("updateuser");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TransactionDTO> entity = new HttpEntity<>(dto, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/1",
                HttpMethod.PUT,
                entity,
                String.class
        );

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction was modified by other users"));
        verify(transactionService).update(eq(1L), any(TransactionDTO.class));
    }

    @Test
    public void testDeleteTransaction() {
        doNothing().when(transactionService).delete(1L);

        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<Void> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/1",
                HttpMethod.DELETE,
                entity,
                Void.class
        );

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(transactionService).delete(1L);
    }

    @Test
    public void testDeleteTransactionNotFound() {
        doThrow(new ResourceNotFoundException("Transaction not found"))
                .when(transactionService).delete(999L);

        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                getBaseUrl() + "/transactions/999",
                HttpMethod.DELETE,
                entity,
                String.class
        );

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction not found"));
        verify(transactionService).delete(999L);
    }

    @Test
    public void testBatchDeleteTransactions() {
        when(transactionService.deleteMultiple(Arrays.asList(1L, 2L, 3L))).thenReturn(3);

        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/batch")
                .queryParam("ids", 1L, 2L, 3L)
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("deletedCount"));
        assertTrue(Objects.requireNonNull(response.getBody()).contains("3"));
        verify(transactionService).deleteMultiple(Arrays.asList(1L, 2L, 3L));
    }

    @Test
    public void testBatchDeleteTransactionsWithNullIds() {
        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/batch")
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction IDs list cannot be null or empty"));
        verify(transactionService, never()).deleteMultiple(anyList());
    }

    @Test
    public void testBatchDeleteTransactionsWithEmptyIds() {
        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/batch")
                .queryParam("ids", new ArrayList<Long>())
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Transaction IDs list cannot be null or empty"));
        verify(transactionService, never()).deleteMultiple(anyList());
    }

    @Test
    public void testBatchDeleteTransactionsWithNoExistingIds() {
        when(transactionService.deleteMultiple(Arrays.asList(1L, 2L, 3L))).thenReturn(0);

        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/batch")
                .queryParam("ids", 1L, 2L, 3L)
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("deletedCount"));
        assertTrue(Objects.requireNonNull(response.getBody()).contains("0"));
        verify(transactionService).deleteMultiple(Arrays.asList(1L, 2L, 3L));
    }

    @Test
    public void testBatchDeleteTransactionsWithPartialSuccess() {
        when(transactionService.deleteMultiple(Arrays.asList(1L, 2L, 3L))).thenReturn(2);

        String url = UriComponentsBuilder.fromUriString(getBaseUrl() + "/transactions/batch")
                .queryParam("ids", 1L, 2L, 3L)
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<Void> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

        assertEquals(HttpStatus.PARTIAL_CONTENT, response.getStatusCode());
        assertTrue(Objects.requireNonNull(response.getBody()).contains("deletedCount"));
        assertTrue(Objects.requireNonNull(response.getBody()).contains("2"));
        verify(transactionService).deleteMultiple(Arrays.asList(1L, 2L, 3L));
    }
} 