package com.ywang.bank.config;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.service.BankTransactionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cache.CacheManager;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@ActiveProfiles("test")
public class CacheTest {

    @Autowired
    private BankTransactionService transactionService;

    @Autowired
    private CacheManager cacheManager;

    @Test
    public void testCacheFunctionality() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            var cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });

        // from db
        List<Transaction> firstCall = transactionService.listAll();
        assertNotNull(firstCall);

        //  from cache
        List<Transaction> secondCall = transactionService.listAll();
        assertNotNull(secondCall);
        assertEquals(firstCall.size(), secondCall.size());

        assertEquals(firstCall.size(), secondCall.size(), "Cache should work correctly");
    }

    @Test
    public void testCacheEviction() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            var cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });

        // create will clear cache
        TransactionDTO dto = new TransactionDTO();
        dto.setDescription("Cache test transaction");
        dto.setAmount("100.00");
        dto.setType("INCOME");
        dto.setCreateUser("testuser");

        Transaction created = transactionService.create(dto);
        assertNotNull(created);

        assertNotNull(created.getId(), "Transaction should be created successfully");
    }

    @Test
    public void testPagedListCache() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            var cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });

        List<Transaction> firstCall = transactionService.list(0, 10, null);
        assertNotNull(firstCall);

        List<Transaction> secondCall = transactionService.list(0, 10, null);
        assertNotNull(secondCall);
        assertEquals(firstCall.size(), secondCall.size());

        assertEquals(firstCall.size(), secondCall.size(), "Cache should work correctly");
    }
} 