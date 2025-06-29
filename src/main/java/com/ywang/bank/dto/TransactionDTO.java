package com.ywang.bank.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.Instant;

@Data
public class TransactionDTO {
    private Long id;

    private String description;

    @NotNull
    private String amount;

    private String createUser;

    private String updateUser;

    private Instant createTime;

    private Instant updateTime;

    @NotNull
    private String type;

    private Long version;
}
