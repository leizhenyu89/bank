package com.ywang.bank.repository;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class TransactionRepositoryTest {

    @Autowired
    private BankTransactionRepository repository;

    @Test
    public void testCreateAndFindById() {
        // Create a new transaction
        Transaction tx = new Transaction();
        tx.setDescription("Test Repo");
        tx.setAmount(new BigDecimal("123.45"));
        tx.setType(TransactionType.INCOME);
        tx.setCreateUser("repoUser");
        tx.setCreateTime(Instant.now());
        Transaction saved = repository.save(tx);
        assertNotNull(saved.getId());

        // Find by ID
        Optional<Transaction> found = repository.findById(saved.getId());
        assertTrue(found.isPresent());
        assertEquals("Test Repo", found.get().getDescription());
    }

    @Test
    public void testUpdate() {
        // Create and save
        Transaction tx = new Transaction();
        tx.setDescription("To Update");
        tx.setAmount(new BigDecimal("10.00"));
        tx.setType(TransactionType.EXPENSE);
        tx.setCreateUser("repoUser");
        tx.setCreateTime(Instant.now());
        Transaction saved = repository.save(tx);

        // Update
        saved.setDescription("Updated");
        saved.setAmount(new BigDecimal("20.00"));
        Transaction updated = repository.save(saved);
        assertEquals("Updated", updated.getDescription());
        assertEquals(new BigDecimal("20.00"), updated.getAmount());
    }

    @Test
    public void testDelete() {
        // Create and save
        Transaction tx = new Transaction();
        tx.setDescription("To Delete");
        tx.setAmount(new BigDecimal("5.00"));
        tx.setType(TransactionType.EXPENSE);
        tx.setCreateUser("repoUser");
        tx.setCreateTime(Instant.now());
        Transaction saved = repository.save(tx);
        Long id = saved.getId();
        assertNotNull(id);

        // Delete
        repository.deleteById(id);
        Optional<Transaction> found = repository.findById(id);
        assertTrue(found.isEmpty());
    }

    @Test
    public void testFindAll() {
        // Create multiple transactions
        Transaction tx1 = new Transaction();
        tx1.setDescription("Tx1");
        tx1.setAmount(new BigDecimal("1.00"));
        tx1.setType(TransactionType.INCOME);
        tx1.setCreateUser("user1");
        tx1.setCreateTime(Instant.now());
        repository.save(tx1);

        Transaction tx2 = new Transaction();
        tx2.setDescription("Tx2");
        tx2.setAmount(new BigDecimal("2.00"));
        tx2.setType(TransactionType.EXPENSE);
        tx2.setCreateUser("user2");
        tx2.setCreateTime(Instant.now());
        repository.save(tx2);

        List<Transaction> all = repository.findAll();
        assertTrue(all.size() >= 2);
    }
} 