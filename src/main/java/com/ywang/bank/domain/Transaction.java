package com.ywang.bank.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private TransactionType type;

    private BigDecimal amount;

    private String createUser;

    private String updateUser;

    private Instant createTime;

    private Instant updateTime;

    private String description;

    @Version
    private Long version = 0L;

}


