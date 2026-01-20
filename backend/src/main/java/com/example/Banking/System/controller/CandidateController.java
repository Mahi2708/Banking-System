package com.example.Banking.System.controller;

import com.example.Banking.System.dto.RegisterCandidateRequest;
import com.example.Banking.System.model.Candidate;
import com.example.Banking.System.service.CandidateService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidate")
@CrossOrigin("*")
public class CandidateController {

    private final CandidateService service;

    public CandidateController(CandidateService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public Candidate register(@RequestBody RegisterCandidateRequest req) {
        return service.register(req);
    }
    @GetMapping("/profile")
    public Candidate profileByMobile(@RequestParam String mobile) {
        return service.profileByMobile(mobile);
    }


    @GetMapping("/profile/{bankingId}")
    public Candidate profile(@PathVariable String bankingId) {
        return service.profile(bankingId);
    }
}
