package com.example.Banking.System.service;

import com.example.Banking.System.model.Admin;
import com.example.Banking.System.model.Candidate;
import com.example.Banking.System.repository.AdminRepository;
import com.example.Banking.System.repository.CandidateRepository;
import com.example.Banking.System.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final AdminRepository adminRepo;
    private final CandidateRepository candidateRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AdminService(AdminRepository adminRepo, CandidateRepository candidateRepo,
                        PasswordEncoder encoder, JwtUtil jwtUtil) {
        this.adminRepo = adminRepo;
        this.candidateRepo = candidateRepo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    public String login(String mobile, String password) {
        Admin admin = adminRepo.findByMobile(mobile)
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        if (!encoder.matches(password, admin.getPassword()))
            throw new RuntimeException("Invalid password");

        return jwtUtil.generateToken(mobile, "ADMIN");
    }

    public List<Candidate> allCandidates() {
        return candidateRepo.findAll();
    }

    public String approve(Long candidateId) {
        candidateRepo.approveCandidate(candidateId);
        return "Candidate approved";
    }

    public String block(String bankingId) {
        candidateRepo.updateStatus(bankingId, "BLOCKED");
        return "Candidate blocked";
    }
}
