package com.ywang.bank.config;

import com.ywang.bank.dto.ErrorResult;
import com.ywang.bank.exception.ConcurrentModificationException;
import com.ywang.bank.exception.DuplicateKeyException;
import com.ywang.bank.exception.ResourceNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class GlobalExceptionHandlerTest {

    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    @Test
    void testHandleTransactionNotFound() {
        ResourceNotFoundException ex = new ResourceNotFoundException("Transaction not found with ID: 123");
        
        ResponseEntity<ErrorResult> response = handler.handleTransactionNotFound(ex);
        
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(404, errorResult.getStatus());
        assertEquals("Not Found", errorResult.getError());
        assertEquals("Transaction not found with ID: 123", errorResult.getMessage());
        assertNotNull(errorResult.getTimestamp());
    }

    @Test
    void testHandleDuplicateTransaction() {
        DuplicateKeyException ex = new DuplicateKeyException("Transaction already exists");
        
        ResponseEntity<ErrorResult> response = handler.handleDuplicateTransaction(ex);
        
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(409, errorResult.getStatus());
        assertEquals("Conflict", errorResult.getError());
        assertEquals("Transaction already exists", errorResult.getMessage());
    }

    @Test
    void testHandleConcurrentModification() {
        ConcurrentModificationException ex = new ConcurrentModificationException("Transaction was modified by another user", new RuntimeException());
        
        ResponseEntity<ErrorResult> response = handler.handleConcurrentModification(ex);
        
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(409, errorResult.getStatus());
        assertEquals("Conflict", errorResult.getError());
        assertEquals("Transaction was modified by another user", errorResult.getMessage());
    }

    @Test
    void testHandleIllegalArgument() {
        IllegalArgumentException ex = new IllegalArgumentException("Invalid amount");
        
        ResponseEntity<ErrorResult> response = handler.handleIllegalArgument(ex);
        
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(400, errorResult.getStatus());
        assertEquals("Bad Request", errorResult.getError());
        assertEquals("Invalid parameter: Invalid amount", errorResult.getMessage());
    }

    @Test
    void testHandleMissingParameter() {
        MissingServletRequestParameterException ex = new MissingServletRequestParameterException(
            "page", "int");
        
        ResponseEntity<ErrorResult> response = handler.handleMissingParameter(ex);
        
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(400, errorResult.getStatus());
        assertEquals("Bad Request", errorResult.getError());
        assertEquals("Missing required parameter: page", errorResult.getMessage());
    }

    @Test
    void testHandleGenericException() {
        RuntimeException ex = new RuntimeException("Unexpected error");
        
        ResponseEntity<ErrorResult> response = handler.handleGenericException(ex);
        
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNotNull(response.getBody());
        ErrorResult errorResult = response.getBody();
        assertEquals(500, errorResult.getStatus());
        assertEquals("Internal Server Error", errorResult.getError());
        assertEquals("Internal server error: Unexpected error", errorResult.getMessage());
    }
} 