package com.ywang.bank.exception;

public class DuplicateKeyException extends RuntimeException{

    public DuplicateKeyException(String msg){
        super(msg);
    }
}
