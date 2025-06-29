package com.ywang.bank.exception;

public class ConcurrentModificationException extends RuntimeException {
    
    public ConcurrentModificationException(String msg) {
        super(msg);
    }
    
    public ConcurrentModificationException(String msg, Throwable cause) {
        super(msg, cause);
    }
} 