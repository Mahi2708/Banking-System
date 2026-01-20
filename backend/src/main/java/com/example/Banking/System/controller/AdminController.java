package com.example.Banking.System.controller;

import com.example.Banking.System.dto.AdminLoginRequest;
import com.example.Banking.System.model.Candidate;
import com.example.Banking.System.service.AdminService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    private final AdminService service;

    public AdminController(AdminService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody AdminLoginRequest req) {
        String token = service.login(req.getMobile(), req.getPassword());
        return Map.of("message", "Admin login success", "token", token);
    }

    @GetMapping("/candidates")
    public List<Candidate> candidates() {
        return service.allCandidates();
    }

    @PostMapping("/approve/{candidateId}")
    public Map<String, Object> approve(@PathVariable Long candidateId) {
        return Map.of("message", service.approve(candidateId));
    }

    @PostMapping("/block/{bankingId}")
    public Map<String, Object> block(@PathVariable String bankingId) {
        return Map.of("message", service.block(bankingId));
    }
}
