package com.example.Banking.System.service;

import com.example.Banking.System.dto.DepositRequest;
import com.example.Banking.System.dto.TransferRequest;
import com.example.Banking.System.dto.WithdrawRequest;
import com.example.Banking.System.model.Transaction;
import com.example.Banking.System.repository.AccountRepository;
import com.example.Banking.System.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class TransactionService {

    private final AccountRepository accountRepo;
    private final TransactionRepository txnRepo;

    public TransactionService(AccountRepository accountRepo, TransactionRepository txnRepo) {
        this.accountRepo = accountRepo;
        this.txnRepo = txnRepo;
    }

    @Transactional
    public String deposit(DepositRequest req) {
        BigDecimal bal = accountRepo.getBalance(req.getBankingId())
                .orElseThrow(() -> new RuntimeException("Account not found"));

        BigDecimal newBal = bal.add(req.getAmount());
        accountRepo.updateBalance(req.getBankingId(), newBal);

        Transaction t = new Transaction();
        t.setFromBankingId(null);
        t.setToBankingId(req.getBankingId());
        t.setTxnType("DEPOSIT");
        t.setAmount(req.getAmount());
        t.setStatus("SUCCESS");
        txnRepo.save(t);

        return "Deposit Success. New Balance = " + newBal;
    }

    @Transactional
    public String withdraw(WithdrawRequest req) {
        BigDecimal bal = accountRepo.getBalance(req.getBankingId())
                .orElseThrow(() -> new RuntimeException("Account not found"));

        if (bal.compareTo(req.getAmount()) < 0)
            throw new RuntimeException("Insufficient balance");

        BigDecimal newBal = bal.subtract(req.getAmount());
        accountRepo.updateBalance(req.getBankingId(), newBal);

        Transaction t = new Transaction();
        t.setFromBankingId(req.getBankingId());
        t.setToBankingId(null);
        t.setTxnType("WITHDRAW");
        t.setAmount(req.getAmount());
        t.setStatus("SUCCESS");
        txnRepo.save(t);

        return "Withdraw Success. New Balance = " + newBal;
    }

    @Transactional
    public String transfer(TransferRequest req) {

        if (!accountRepo.exists(req.getToBankingId()))
            throw new RuntimeException("Receiver account not found");

        BigDecimal senderBal = accountRepo.getBalance(req.getFromBankingId())
                .orElseThrow(() -> new RuntimeException("Sender account not found"));

        if (senderBal.compareTo(req.getAmount()) < 0)
            throw new RuntimeException("Insufficient balance");

        BigDecimal receiverBal = accountRepo.getBalance(req.getToBankingId())
                .orElseThrow(() -> new RuntimeException("Receiver account not found"));

        accountRepo.updateBalance(req.getFromBankingId(), senderBal.subtract(req.getAmount()));
        accountRepo.updateBalance(req.getToBankingId(), receiverBal.add(req.getAmount()));

        Transaction t = new Transaction();
        t.setFromBankingId(req.getFromBankingId());
        t.setToBankingId(req.getToBankingId());
        t.setTxnType("TRANSFER");
        t.setAmount(req.getAmount());
        t.setStatus("SUCCESS");
        txnRepo.save(t);

        return "Transfer Successful";
    }

    public List<Transaction> history(String bankingId) {
        return txnRepo.history(bankingId);
    }
}
