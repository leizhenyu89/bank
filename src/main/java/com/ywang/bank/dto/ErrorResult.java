package com.ywang.bank.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResult {
    private Instant timestamp;
    private int status;
    private String message;
    private String error;

    public static ErrorResult of(String message, HttpStatus status) {
        return ErrorResult.builder()
                .timestamp(Instant.now())
                .status(status.value())
                .message(message)
                .error(status.getReasonPhrase())
                .build();
    }

}