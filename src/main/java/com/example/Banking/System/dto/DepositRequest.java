package com.example.Banking.System.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class DepositRequest {
    private String bankingId;
    private BigDecimal amount;
}
