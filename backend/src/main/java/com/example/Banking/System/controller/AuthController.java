package com.example.Banking.System.controller;

import com.example.Banking.System.dto.SendOtpRequest;
import com.example.Banking.System.dto.VerifyOtpRequest;
import com.example.Banking.System.service.AuthService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/send-otp")
    public Map<String, Object> sendOtp(@RequestBody SendOtpRequest req) {
        service.sendOtp(req.getMobile());
        return Map.of("message", "OTP sent successfully");
    }


    @PostMapping("/verify-otp")
    public Map<String, Object> verifyOtp(@RequestBody VerifyOtpRequest req) {
        String token = service.verifyOtp(req.getMobile(), req.getOtp());
        return Map.of("message", "Login success", "token", token);
    }
}
