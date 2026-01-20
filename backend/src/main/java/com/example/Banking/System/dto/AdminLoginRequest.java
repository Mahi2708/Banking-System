package com.example.Banking.System.dto;

import lombok.Data;

@Data
public class AdminLoginRequest {
    private String mobile;
    private String password;
}
