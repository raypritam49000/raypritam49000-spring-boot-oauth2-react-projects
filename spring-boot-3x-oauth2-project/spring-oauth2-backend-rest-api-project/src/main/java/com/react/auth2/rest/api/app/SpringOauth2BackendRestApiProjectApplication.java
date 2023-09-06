package com.react.auth2.rest.api.app;

import com.react.auth2.rest.api.app.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class SpringOauth2BackendRestApiProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringOauth2BackendRestApiProjectApplication.class, args);
    }

}
