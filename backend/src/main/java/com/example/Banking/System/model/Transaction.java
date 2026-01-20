package com.example.Banking.System.model;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class Transaction {
    private Long txnId;
    private String fromBankingId;
    private String toBankingId;
    private String txnType;
    private BigDecimal amount;
    private LocalDateTime txnTime;
    private String status;
}
