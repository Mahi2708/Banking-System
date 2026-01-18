package com.example.Banking.System.model;

import lombok.Data;

@Data
public class Candidate {
    private Long candidateId;
    private String name;
    private String mobile;
    private String email;
    private String address;
    private String bankingId;
    private String status;
}
