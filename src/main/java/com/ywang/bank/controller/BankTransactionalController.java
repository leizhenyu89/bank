package com.ywang.bank.controller;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.service.BankTransactionService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/transactions")
public class BankTransactionalController {

    private final BankTransactionService transactionService;

    @Autowired
    public BankTransactionalController(BankTransactionService transactionService){
        this.transactionService = transactionService;
    }

    /**
     * Create a new transaction
     *
     * @param transaction the transaction data
     * @return the created transaction
     */
    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody TransactionDTO transaction) {
        Transaction created = transactionService.create(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /**
     * Get all transactions
     *
     * @return list of all transactions
     */
    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.listAll();
        return ResponseEntity.ok(transactions);
    }

    /**
     * Get a transaction by ID
     *
     * @param id transaction ID
     * @return the transaction
     */
    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        Transaction transaction = transactionService.findById(id);
        return ResponseEntity.ok(transaction);
    }

    /**
     * Get transactions with pagination and optional type filter
     *
     * @param page page number (0-based)
     * @param size page size
     * @param type transaction type filter (optional)
     * @return Page object with transactions and pagination info
     */
    @GetMapping("/list")
    public ResponseEntity<Page<Transaction>> getTransactions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String type) {

        TransactionType transactionType = null;
        if (type != null && !type.trim().isEmpty()) {
            try {
                transactionType = TransactionType.valueOf(type.toUpperCase());
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().build();
            }
        }

        Page<Transaction> transactions = transactionService.pageQuery(page, size, transactionType);
        return ResponseEntity.ok(transactions);
    }

    /**
     * Update a transaction
     *
     * @param id  transaction ID
     * @param dto the updated transaction data
     * @return the updated transaction
     */
    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(
            @NotNull @PathVariable Long id,
            @RequestBody TransactionDTO dto) {
        Transaction updated = transactionService.update(id, dto);
        return ResponseEntity.ok(updated);
    }

    /**
     * Delete a transaction
     *
     * @param id transaction ID
     * @return no content response
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.delete(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Delete multiple transactions by their IDs (RESTful: use URL param)
     *
     * @param ids list of transaction IDs to delete
     * @return response with number of deleted transactions
     */
    @DeleteMapping("/batch")
    public ResponseEntity<Map<String, Object>> deleteMultipleTransactions(@RequestParam(required = false) List<Long> ids) {
        if (ids == null || ids.isEmpty()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Transaction IDs list cannot be null or empty");
            errorResponse.put("deletedCount", 0);
            return ResponseEntity.badRequest().body(errorResponse);
        }
        
        int deletedCount = transactionService.deleteMultiple(ids);
        
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Successfully deleted " + deletedCount + " transaction(s)");
        response.put("deletedCount", deletedCount);
        response.put("requestedCount", ids.size());
        
        if (deletedCount == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else if (deletedCount < ids.size()) {
            return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT).body(response);
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
