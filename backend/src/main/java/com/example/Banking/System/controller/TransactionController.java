package com.example.Banking.System.controller;

import com.example.Banking.System.dto.DepositRequest;
import com.example.Banking.System.dto.TransferRequest;
import com.example.Banking.System.dto.WithdrawRequest;
import com.example.Banking.System.model.Transaction;
import com.example.Banking.System.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/txn")
@CrossOrigin("*")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping("/deposit")
    public Map<String, Object> deposit(@RequestBody DepositRequest req) {
        return Map.of("message", service.deposit(req));
    }

    @PostMapping("/withdraw")
    public Map<String, Object> withdraw(@RequestBody WithdrawRequest req) {
        return Map.of("message", service.withdraw(req));
    }

    @PostMapping("/transfer")
    public Map<String, Object> transfer(@RequestBody TransferRequest req) {
        return Map.of("message", service.transfer(req));
    }

    @GetMapping("/history/{bankingId}")
    public List<Transaction> history(@PathVariable String bankingId) {
        return service.history(bankingId);
    }
}
