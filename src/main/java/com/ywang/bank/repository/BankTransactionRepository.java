package com.ywang.bank.repository;


import com.ywang.bank.domain.Transaction;
import com.ywang.bank.domain.TransactionType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankTransactionRepository extends JpaRepository<Transaction, Long> {
    Page<Transaction> findByType(TransactionType type, Pageable pageable);
}
