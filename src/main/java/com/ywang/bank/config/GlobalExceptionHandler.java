package com.ywang.bank.config;

import com.ywang.bank.dto.ErrorResult;
import com.ywang.bank.exception.ConcurrentModificationException;
import com.ywang.bank.exception.DuplicateKeyException;
import com.ywang.bank.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Global exception handler for centralized error processing
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResult> handleTransactionNotFound(ResourceNotFoundException ex) {
        ErrorResult error = ErrorResult.of(ex.getMessage(), HttpStatus.NOT_FOUND);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<ErrorResult> handleDuplicateTransaction(DuplicateKeyException ex) {
        ErrorResult error = ErrorResult.of(ex.getMessage(), HttpStatus.CONFLICT);
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(ConcurrentModificationException.class)
    public ResponseEntity<ErrorResult> handleConcurrentModification(ConcurrentModificationException ex) {
        ErrorResult error = ErrorResult.of(ex.getMessage(), HttpStatus.CONFLICT);
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResult> handleIllegalArgument(IllegalArgumentException ex) {
        String message = "Invalid parameter: " + ex.getMessage();
        ErrorResult error = ErrorResult.of(message, HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ErrorResult> handleMissingParameter(MissingServletRequestParameterException ex) {
        String message = "Missing required parameter: " + ex.getParameterName();
        ErrorResult error = ErrorResult.of(message, HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResult> handleGenericException(Exception ex) {
        String message = "Internal server error: " + ex.getMessage();
        ErrorResult error = ErrorResult.of(message, HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
} 