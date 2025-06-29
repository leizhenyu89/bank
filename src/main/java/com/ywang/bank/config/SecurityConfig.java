package com.ywang.bank.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CorsProperties corsProperties;

    public SecurityConfig(CorsProperties corsProperties) {
        this.corsProperties = corsProperties;
    }

    /**
     * Configure security filter chain with CORS support
     * Disables CSRF for API endpoints and configures CORS
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF for API endpoints
            .csrf(AbstractHttpConfigurer::disable)
            
            // Configure CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // Configure session management
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            
            // Configure authorization rules
            .authorizeHttpRequests(authz -> authz
                // Allow all API endpoints without authentication for demo
                .requestMatchers("/transactions/**").permitAll()
                // Allow actuator endpoints
                .requestMatchers("/actuator/**").permitAll()
                // Allow Swagger UI
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-ui.html").permitAll()
                // Allow all other requests
                .anyRequest().permitAll()
            )
            
            // Configure headers
            .headers(headers -> headers
                .frameOptions().disable() // Allow H2 console in frames
            );

        return http.build();
    }

    /**
     * CORS configuration source for Spring Security
     * Uses CorsProperties configuration class for CORS settings
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // Set allowed origins from configuration
        if (corsProperties.getAllowedOrigins() != null && !corsProperties.getAllowedOrigins().isEmpty()) {
            configuration.setAllowedOrigins(corsProperties.getAllowedOrigins());
        } else {
            // Fallback to allow all origins for development
            configuration.addAllowedOriginPattern("*");
        }
        
        // Set allowed methods from configuration
        if (corsProperties.getAllowedMethods() != null && !corsProperties.getAllowedMethods().isEmpty()) {
            configuration.setAllowedMethods(corsProperties.getAllowedMethods());
        } else {
            configuration.addAllowedMethod("*");
        }
        
        // Set allowed headers from configuration
        if (corsProperties.getAllowedHeaders() != null && !corsProperties.getAllowedHeaders().isEmpty()) {
            configuration.setAllowedHeaders(corsProperties.getAllowedHeaders());
        } else {
            configuration.addAllowedHeader("*");
        }
        
        // Set credentials from configuration
        configuration.setAllowCredentials(corsProperties.isAllowCredentials());
        
        // Set max age from configuration
        configuration.setMaxAge(corsProperties.getMaxAge());
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        
        return source;
    }
} 