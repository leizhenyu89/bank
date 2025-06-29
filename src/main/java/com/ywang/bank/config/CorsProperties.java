package com.ywang.bank.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * CORS configuration properties
 * Maps CORS settings from application.yml
 */
@Data
@Component
@ConfigurationProperties(prefix = "cors")
public class CorsProperties {
    
    /**
     * Allowed origins for CORS requests
     */
    private List<String> allowedOrigins;
    
    /**
     * Allowed HTTP methods
     */
    private List<String> allowedMethods;
    
    /**
     * Allowed headers
     */
    private List<String> allowedHeaders;
    
    /**
     * Whether to allow credentials
     */
    private boolean allowCredentials;
    
    /**
     * Max age for preflight requests in seconds
     */
    private long maxAge;
} 