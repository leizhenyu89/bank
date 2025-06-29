package com.ywang.bank.dto;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import java.time.Instant;

import static org.junit.jupiter.api.Assertions.*;

class ErrorResultTest {

    @Test
    void testErrorResultBuilder() {
        Instant now = Instant.now();
        ErrorResult errorResult = ErrorResult.builder()
                .timestamp(now)
                .status(404)
                .message("Resource not found")
                .error("Not Found")
                .build();

        assertEquals(now, errorResult.getTimestamp());
        assertEquals(404, errorResult.getStatus());
        assertEquals("Resource not found", errorResult.getMessage());
        assertEquals("Not Found", errorResult.getError());
    }

    @Test
    void testErrorResultOfWithHttpStatus() {
        ErrorResult errorResult = ErrorResult.of("Transaction not found", HttpStatus.NOT_FOUND);

        assertNotNull(errorResult.getTimestamp());
        assertEquals(404, errorResult.getStatus());
        assertEquals("Transaction not found", errorResult.getMessage());
        assertEquals("Not Found", errorResult.getError());
    }

    @Test
    void testErrorResultOfWithDifferentStatusCodes() {
        ErrorResult badRequest = ErrorResult.of("Invalid input", HttpStatus.BAD_REQUEST);
        ErrorResult conflict = ErrorResult.of("Duplicate entry", HttpStatus.CONFLICT);
        ErrorResult serverError = ErrorResult.of("System error", HttpStatus.INTERNAL_SERVER_ERROR);

        assertEquals(400, badRequest.getStatus());
        assertEquals("Bad Request", badRequest.getError());

        assertEquals(409, conflict.getStatus());
        assertEquals("Conflict", conflict.getError());

        assertEquals(500, serverError.getStatus());
        assertEquals("Internal Server Error", serverError.getError());
    }

    @Test
    void testErrorResultEqualsAndHashCode() {
        Instant timestamp = Instant.now();
        ErrorResult error1 = ErrorResult.builder()
                .timestamp(timestamp)
                .status(404)
                .message("Not found")
                .error("Not Found")
                .build();

        ErrorResult error2 = ErrorResult.builder()
                .timestamp(timestamp)
                .status(404)
                .message("Not found")
                .error("Not Found")
                .build();

        assertEquals(error1, error2);
        assertEquals(error1.hashCode(), error2.hashCode());
    }

    @Test
    void testErrorResultToString() {
        ErrorResult errorResult = ErrorResult.of("Test error", HttpStatus.BAD_REQUEST);
        String toString = errorResult.toString();

        assertTrue(toString.contains("timestamp="));
        assertTrue(toString.contains("status=400"));
        assertTrue(toString.contains("message=Test error"));
        assertTrue(toString.contains("error=Bad Request"));
    }

    @Test
    void testErrorResultSetters() {
        ErrorResult errorResult = new ErrorResult();
        Instant timestamp = Instant.now();

        errorResult.setTimestamp(timestamp);
        errorResult.setStatus(500);
        errorResult.setMessage("Custom error");
        errorResult.setError("Custom Error");

        assertEquals(timestamp, errorResult.getTimestamp());
        assertEquals(500, errorResult.getStatus());
        assertEquals("Custom error", errorResult.getMessage());
        assertEquals("Custom Error", errorResult.getError());
    }
} 