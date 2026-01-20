package com.example.Banking.System.dto;

import lombok.Data;

@Data
public class VerifyOtpRequest {
    private String mobile;
    private String otp;
}
