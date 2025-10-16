package com.bo.auth.dto.request;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String id;
    private String password;
}