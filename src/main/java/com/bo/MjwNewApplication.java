package com.bo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@ServletComponentScan
@EnableAsync
@ComponentScan(basePackages = { "com" })
public class MjwNewApplication {

    public static void main(String[] args) {
        SpringApplication.run(MjwNewApplication.class, args);
    }

}
