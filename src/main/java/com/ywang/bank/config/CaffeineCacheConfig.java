package com.ywang.bank.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Configuration properties for Caffeine Cache settings
 */
@Data
@Component
@ConfigurationProperties(prefix = "cache.caffeine")
public class CaffeineCacheConfig {
    
    private int maxSize = 1000;
    private int expireAfterWrite = 30;
    private int expireAfterAccess = 10;
    private boolean recordStats = true;
}