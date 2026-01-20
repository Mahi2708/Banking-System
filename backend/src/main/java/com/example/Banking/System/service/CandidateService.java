package com.example.Banking.System.service;

import com.example.Banking.System.dto.RegisterCandidateRequest;
import com.example.Banking.System.model.Candidate;
import com.example.Banking.System.repository.AccountRepository;
import com.example.Banking.System.repository.CandidateRepository;
import com.example.Banking.System.util.BankingIdGenerator;
import org.springframework.stereotype.Service;

@Service
public class CandidateService {

    private final CandidateRepository candidateRepo;
    private final AccountRepository accountRepo;

    public CandidateService(CandidateRepository candidateRepo, AccountRepository accountRepo) {
        this.candidateRepo = candidateRepo;
        this.accountRepo = accountRepo;
    }

    public Candidate register(RegisterCandidateRequest req) {

        candidateRepo.findByMobile(req.getMobile()).ifPresent(x -> {
            throw new RuntimeException("Mobile already registered");
        });

        String bankingId = BankingIdGenerator.generate(req.getMobile());

        Candidate c = new Candidate();
        c.setName(req.getName());
        c.setMobile(req.getMobile());
        c.setEmail(req.getEmail());
        c.setAddress(req.getAddress());
        c.setBankingId(bankingId);
        c.setStatus("PENDING");

        candidateRepo.save(c);
        accountRepo.createAccount(bankingId);

        return c;
    }
    public Candidate profileByMobile(String mobile) {
        return candidateRepo.findByMobile(mobile)
                .orElseThrow(() -> new RuntimeException("Candidate not found"));
    }

    public Candidate profile(String bankingId) {
        return candidateRepo.findByBankingId(bankingId)
                .orElseThrow(() -> new RuntimeException("Candidate not found"));
    }
}
