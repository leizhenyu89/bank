package com.ywang.bank.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class CacheConfig {

    private final CaffeineCacheConfig caffeineCacheConfig;

    public CacheConfig(CaffeineCacheConfig caffeineCacheConfig) {
        this.caffeineCacheConfig = caffeineCacheConfig;
    }

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        
        Caffeine<Object, Object> caffeineBuilder = Caffeine.newBuilder()
            .maximumSize(caffeineCacheConfig.getMaxSize())
            .expireAfterWrite(caffeineCacheConfig.getExpireAfterWrite(), TimeUnit.MINUTES)
            .expireAfterAccess(caffeineCacheConfig.getExpireAfterAccess(), TimeUnit.MINUTES);
        
        if (caffeineCacheConfig.isRecordStats()) {
            caffeineBuilder.recordStats();
        }
        
        cacheManager.setCaffeine(caffeineBuilder);
        cacheManager.setCacheNames(java.util.Arrays.asList("transactions", "transaction"));
        return cacheManager;
    }
} 