package com.example.Banking.System.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class TransferRequest {
    private String fromBankingId;
    private String toBankingId;
    private BigDecimal amount;
}
