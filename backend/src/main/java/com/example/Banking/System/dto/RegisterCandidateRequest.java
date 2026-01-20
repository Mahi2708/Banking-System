package com.example.Banking.System.dto;

import lombok.Data;

@Data
public class RegisterCandidateRequest {
    private String name;
    private String mobile;
    private String email;
    private String address;
}
