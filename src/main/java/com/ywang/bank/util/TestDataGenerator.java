package com.ywang.bank.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.service.BankTransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

@Slf4j
@Component
@Profile("!test")
public class TestDataGenerator implements CommandLineRunner {

    @Autowired
    private BankTransactionService transactionService;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void run(String... args) throws Exception {
        // Check if --generate-test-data flag is provided
        boolean shouldGenerateData = false;
        for (String arg : args) {
            if ("--generate-test-data".equals(arg)) {
                shouldGenerateData = true;
                break;
            }
        }

        if (!shouldGenerateData) {
            return;
        }

        log.info("Starting test data generation...");
        
        // Clear existing data first
        List<Transaction> existingTransactions = transactionService.listAll();
        if (!existingTransactions.isEmpty()) {
            log.info("Clearing existing data: {} transactions", existingTransactions.size());
            for (Transaction transaction : existingTransactions) {
                if (transaction.getId() != null) {
                    transactionService.delete(transaction.getId());
                }
            }
        }

        // Load test data from JSON file
        List<TransactionDTO> testData = loadTestDataFromJson();
        
        // Save test data
        int savedCount = 0;
        for (TransactionDTO dto : testData) {
            try {
                Transaction created = transactionService.create(dto);
                savedCount++;
                log.info("Created transaction: {} - {}", created.getId(), dto.getDescription());
            } catch (Exception e) {
                log.error("Failed to create transaction: {} - {}", dto.getDescription(), e.getMessage());
            }
        }
        
        log.info("Test data generation completed. Created {} transactions", savedCount);
        
        // Print summary
        List<Transaction> allTransactions = transactionService.listAll();
        long incomeCount = allTransactions.stream().filter(t -> t.getType() == TransactionType.INCOME).count();
        long expenseCount = allTransactions.stream().filter(t -> t.getType() == TransactionType.EXPENSE).count();
        
        log.info("Summary:");
        log.info("- Total transactions: {}", allTransactions.size());
        log.info("- Income transactions: {}", incomeCount);
        log.info("- Expense transactions: {}", expenseCount);
    }

    List<TransactionDTO> loadTestDataFromJson() {
        try {
            ClassPathResource resource = new ClassPathResource("test-data.json");
            InputStream inputStream = resource.getInputStream();
            
            Map<String, List<Map<String, Object>>> data = objectMapper.readValue(
                inputStream, 
                new TypeReference<Map<String, List<Map<String, Object>>>>() {}
            );
            
            List<Map<String, Object>> transactionsData = data.get("transactions");
            return transactionsData.stream()
                .map(this::mapToTransactionDTO)
                .toList();
                
        } catch (IOException e) {
            log.error("Failed to load test data from JSON file", e);
            throw new RuntimeException("Failed to load test data", e);
        }
    }

    TransactionDTO mapToTransactionDTO(Map<String, Object> data) {
        TransactionDTO dto = new TransactionDTO();
        dto.setDescription((String) data.get("description"));
        dto.setAmount((String) data.get("amount"));
        dto.setType((String) data.get("type"));
        dto.setCreateUser((String) data.get("createUser"));
        return dto;
    }
} 