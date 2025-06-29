package com.ywang.bank.service;

import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import com.ywang.bank.dto.TransactionDTO;
import com.ywang.bank.exception.ConcurrentModificationException;
import com.ywang.bank.exception.ResourceNotFoundException;
import com.ywang.bank.repository.BankTransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @Mock
    private BankTransactionRepository transactionRepository;

    @InjectMocks
    private BankTransactionService transactionService;

    private TransactionDTO testDto;
    private Transaction testTransaction;

    @BeforeEach
    void setUp() {
        testDto = new TransactionDTO();
        testDto.setDescription("Test transaction");
        testDto.setAmount("100.00");
        testDto.setType("INCOME");
        testDto.setCreateUser("testuser");

        testTransaction = new Transaction();
        testTransaction.setId(1L);
        testTransaction.setDescription("Test transaction");
        testTransaction.setAmount(new BigDecimal("100.00"));
        testTransaction.setType(TransactionType.INCOME);
        testTransaction.setCreateUser("testuser");
        testTransaction.setCreateTime(Instant.now());
    }

    @Test
    public void testCreateTransaction() {
        when(transactionRepository.save(any(Transaction.class))).thenReturn(testTransaction);

        Transaction created = transactionService.create(testDto);
        
        assertNotNull(created);
        assertEquals("Test transaction", created.getDescription());
        assertEquals(new BigDecimal("100.00"), created.getAmount());
        assertEquals(TransactionType.INCOME, created.getType());
        assertEquals("testuser", created.getCreateUser());
        verify(transactionRepository).save(any(Transaction.class));
    }

    @Test
    public void testCreateTransactionWithNullCreateUser() {
        testDto.setCreateUser(null);
        
        assertThrows(IllegalArgumentException.class, () -> transactionService.create(testDto));
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testCreateTransactionWithInvalidAmount() {
        testDto.setAmount("invalid");
        
        assertThrows(IllegalArgumentException.class, () -> transactionService.create(testDto));
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testCreateTransactionWithInvalidType() {
        testDto.setType("INVALID_TYPE");
        
        assertThrows(IllegalArgumentException.class, () -> transactionService.create(testDto));
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testFindById() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(testTransaction));
        
        Transaction found = transactionService.findById(1L);
        
        assertNotNull(found);
        assertEquals(1L, found.getId());
        verify(transactionRepository).findById(1L);
    }

    @Test
    public void testFindByIdNotFound() {
        when(transactionRepository.findById(999L)).thenReturn(Optional.empty());
        
        assertThrows(ResourceNotFoundException.class, () -> transactionService.findById(999L));
        verify(transactionRepository).findById(999L);
    }

    @Test
    public void testListAll() {
        List<Transaction> transactions = Arrays.asList(testTransaction);
        when(transactionRepository.findAll()).thenReturn(transactions);
        
        List<Transaction> result = transactionService.listAll();
        
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(testTransaction, result.get(0));
        verify(transactionRepository).findAll();
    }

    @Test
    public void testUpdateTransaction() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("200.00");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser("updateuser");

        when(transactionRepository.findById(1L)).thenReturn(Optional.of(testTransaction));
        when(transactionRepository.save(any(Transaction.class))).thenReturn(testTransaction);
        
        Transaction updated = transactionService.update(1L, updateDto);
        
        assertNotNull(updated);
        verify(transactionRepository).findById(1L);
        verify(transactionRepository).save(any(Transaction.class));
    }

    @Test
    public void testUpdateTransactionWithVersion() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("200.00");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser("updateuser");
        updateDto.setVersion(1L);

        when(transactionRepository.save(any(Transaction.class))).thenReturn(testTransaction);
        
        Transaction updated = transactionService.update(1L, updateDto);
        
        assertNotNull(updated);
        verify(transactionRepository, never()).findById(anyLong());
        verify(transactionRepository).save(any(Transaction.class));
    }

    @Test
    public void testUpdateTransactionWithNullUpdateUser() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("200.00");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser(null);
        
        assertThrows(IllegalArgumentException.class, () -> transactionService.update(1L, updateDto));
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testUpdateTransactionWithInvalidAmount() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("invalid");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser("updateuser");
        
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(testTransaction));
        
        assertThrows(IllegalArgumentException.class, () -> transactionService.update(1L, updateDto));
        verify(transactionRepository).findById(1L);
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testUpdateTransactionWithOptimisticLockingFailure() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("200.00");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser("updateuser");
        
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(testTransaction));
        when(transactionRepository.save(any(Transaction.class))).thenThrow(new OptimisticLockingFailureException("Version conflict"));
        
        assertThrows(ConcurrentModificationException.class, () -> transactionService.update(1L, updateDto));
        verify(transactionRepository).findById(1L);
        verify(transactionRepository).save(any(Transaction.class));
    }

    @Test
    public void testUpdateTransactionNotFound() {
        TransactionDTO updateDto = new TransactionDTO();
        updateDto.setDescription("Updated transaction");
        updateDto.setAmount("200.00");
        updateDto.setType("EXPENSE");
        updateDto.setUpdateUser("updateuser");
        
        when(transactionRepository.findById(999L)).thenReturn(Optional.empty());
        
        assertThrows(ResourceNotFoundException.class, () -> transactionService.update(999L, updateDto));
        verify(transactionRepository).findById(999L);
        verify(transactionRepository, never()).save(any(Transaction.class));
    }

    @Test
    public void testDeleteTransaction() {
        when(transactionRepository.existsById(1L)).thenReturn(true);
        doNothing().when(transactionRepository).deleteById(1L);
        
        transactionService.delete(1L);
        
        verify(transactionRepository).existsById(1L);
        verify(transactionRepository).deleteById(1L);
    }

    @Test
    public void testDeleteTransactionNotFound() {
        when(transactionRepository.existsById(999L)).thenReturn(false);
        
        assertThrows(ResourceNotFoundException.class, () -> transactionService.delete(999L));
        verify(transactionRepository).existsById(999L);
        verify(transactionRepository, never()).deleteById(anyLong());
    }

    @Test
    public void testDeleteMultipleTransactions() {
        List<Long> ids = Arrays.asList(1L, 2L, 3L);
        List<Transaction> existingTransactions = Arrays.asList(testTransaction);
        
        when(transactionRepository.findAllById(ids)).thenReturn(existingTransactions);
        doNothing().when(transactionRepository).deleteAllById(anyList());
        
        int deletedCount = transactionService.deleteMultiple(ids);
        
        assertEquals(1, deletedCount);
        verify(transactionRepository).findAllById(ids);
        verify(transactionRepository).deleteAllById(existingTransactions.stream().map(Transaction::getId).toList());
    }

    @Test
    public void testDeleteMultipleTransactionsWithNullIds() {
        int deletedCount = transactionService.deleteMultiple(null);
        
        assertEquals(0, deletedCount);
        verify(transactionRepository, never()).findAllById(anyList());
        verify(transactionRepository, never()).deleteAllById(anyList());
    }

    @Test
    public void testDeleteMultipleTransactionsWithEmptyIds() {
        int deletedCount = transactionService.deleteMultiple(List.of());
        
        assertEquals(0, deletedCount);
        verify(transactionRepository, never()).findAllById(anyList());
        verify(transactionRepository, never()).deleteAllById(anyList());
    }

    @Test
    public void testDeleteMultipleTransactionsWithNoExistingIds() {
        List<Long> ids = Arrays.asList(1L, 2L, 3L);
        
        when(transactionRepository.findAllById(ids)).thenReturn(List.of());
        
        int deletedCount = transactionService.deleteMultiple(ids);
        
        assertEquals(0, deletedCount);
        verify(transactionRepository).findAllById(ids);
        verify(transactionRepository, never()).deleteAllById(anyList());
    }

    @Test
    public void testListTransactionsWithNullType() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Transaction> page = new PageImpl<>(Arrays.asList(testTransaction));
        
        when(transactionRepository.findAll(pageable)).thenReturn(page);
        
        List<Transaction> result = transactionService.list(0, 10, null);
        
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(testTransaction, result.get(0));
        verify(transactionRepository).findAll(pageable);
    }

    @Test
    public void testListTransactionsWithType() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Transaction> page = new PageImpl<>(Arrays.asList(testTransaction));
        
        when(transactionRepository.findByType(TransactionType.INCOME, pageable)).thenReturn(page);
        
        List<Transaction> result = transactionService.list(0, 10, TransactionType.INCOME);
        
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(testTransaction, result.get(0));
        verify(transactionRepository).findByType(TransactionType.INCOME, pageable);
    }

    @Test
    public void testPageQueryWithNullType() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Transaction> page = new PageImpl<>(Arrays.asList(testTransaction));
        
        when(transactionRepository.findAll(pageable)).thenReturn(page);
        
        Page<Transaction> result = transactionService.pageQuery(0, 10, null);
        
        assertNotNull(result);
        assertEquals(1, result.getContent().size());
        assertEquals(testTransaction, result.getContent().get(0));
        verify(transactionRepository).findAll(pageable);
    }

    @Test
    public void testPageQueryWithType() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Transaction> page = new PageImpl<>(Arrays.asList(testTransaction));
        
        when(transactionRepository.findByType(TransactionType.INCOME, pageable)).thenReturn(page);
        
        Page<Transaction> result = transactionService.pageQuery(0, 10, TransactionType.INCOME);
        
        assertNotNull(result);
        assertEquals(1, result.getContent().size());
        assertEquals(testTransaction, result.getContent().get(0));
        verify(transactionRepository).findByType(TransactionType.INCOME, pageable);
    }
}