package com.ywang.bank.service;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.exception.ConcurrentModificationException;
import com.ywang.bank.exception.ResourceNotFoundException;
import com.ywang.bank.repository.BankTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class BankTransactionService {

    private final BankTransactionRepository transactionRepository;

    @Autowired
    public BankTransactionService(BankTransactionRepository transactionService) {
        this.transactionRepository = transactionService;
    }

    @Transactional
    @CacheEvict(value = {"transactions", "transaction"}, allEntries = true)
    public Transaction create(TransactionDTO dto) {
        if (dto.getCreateUser() == null) {
            throw new IllegalArgumentException("create-user should not be empty");
        }
        Transaction transaction = new Transaction();
        transaction.setDescription(dto.getDescription());
        try {
            transaction.setAmount(new java.math.BigDecimal(dto.getAmount()));
        } catch (Exception e) {
            throw new IllegalArgumentException("amount should be a valid number string");
        }
        transaction.setType(TransactionType.valueOf(dto.getType()));
        Instant now = Instant.now();
        transaction.setCreateTime(now);
        transaction.setUpdateTime(now);
        transaction.setCreateUser(dto.getCreateUser());
        transaction.setUpdateUser(transaction.getCreateUser());
        return transactionRepository.save(transaction);
    }

    @Transactional(readOnly = true)
    @Cacheable(value = "transactions", key = "'all'")
    public List<Transaction> listAll() {
        return transactionRepository.findAll();
    }

    @Transactional
    @CacheEvict(value = {"transactions", "transaction"}, allEntries = true)
    public Transaction update(Long id, TransactionDTO dto) {
        if (dto.getUpdateUser() == null) {
            throw new IllegalArgumentException("update-user should not be empty");
        }
        Transaction transaction;
        // If version is provided, construct entity for optimistic lock update
        if (dto.getVersion() != null) {
            transaction = new Transaction();
            transaction.setId(id);
            transaction.setVersion(dto.getVersion());
        } else {
            // Otherwise query latest data
            transaction = transactionRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Transaction not found with ID: " + id));
        }
        try {
            transaction.setDescription(dto.getDescription());
            transaction.setAmount(new java.math.BigDecimal(dto.getAmount()));
            transaction.setType(TransactionType.valueOf(dto.getType()));
            transaction.setUpdateTime(Instant.now());
            transaction.setUpdateUser(dto.getUpdateUser());
            return transactionRepository.save(transaction);
        } catch (OptimisticLockingFailureException e) {
            throw new ConcurrentModificationException("Transaction was modified by other users. Please try again later.", e);
        } catch (Exception e) {
            throw new IllegalArgumentException("amount should be a valid number string");
        }
    }

    @Transactional
    @CacheEvict(value = {"transactions", "transaction"}, allEntries = true)
    public void delete(Long id) {
        if (!transactionRepository.existsById(id)) {
            throw new ResourceNotFoundException("Transaction not found with ID: " + id);
        }
        transactionRepository.deleteById(id);
    }

    @Transactional
    @CacheEvict(value = {"transactions", "transaction"}, allEntries = true)
    public int deleteMultiple(List<Long> ids) {
        if (ids == null || ids.isEmpty()) {
            return 0;
        }
        
        // Check which transactions exist
        List<Long> existingIds = transactionRepository.findAllById(ids)
                .stream()
                .map(Transaction::getId)
                .toList();
        
        if (existingIds.isEmpty()) {
            return 0;
        }
        
        // Delete existing transactions
        transactionRepository.deleteAllById(existingIds);
        
        return existingIds.size();
    }

    @Transactional(readOnly = true)
    @Cacheable(value = "transactions", key = "#page + '_' + #size + '_' + #type?.name() ?: 'null'")
    public List<Transaction> list(int page, int size, TransactionType type) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Transaction> result;
        if (type == null) {
            result = transactionRepository.findAll(pageable);
        } else {
            result = transactionRepository.findByType(type, pageable);
        }
        return result.getContent();
    }

    @Transactional(readOnly = true)
    @Cacheable(value = "transactions", key = "#page + '_' + #size + '_' + #type?.name() ?: 'null'")
    public Page<Transaction> pageQuery(int page, int size, TransactionType type) {
        Pageable pageable = PageRequest.of(page, size);
        if (type == null) {
            return transactionRepository.findAll(pageable);
        } else {
            return transactionRepository.findByType(type, pageable);
        }
    }

    /**
     * Get transaction by ID with caching
     */
    @Transactional(readOnly = true)
    @Cacheable(value = "transaction", key = "#id")
    public Transaction findById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Transaction not found with ID: " + id));
    }

}
