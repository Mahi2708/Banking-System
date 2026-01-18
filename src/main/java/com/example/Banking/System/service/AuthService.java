package com.example.Banking.System.service;

import com.example.Banking.System.repository.OtpRepository;
import com.example.Banking.System.security.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final OtpRepository otpRepo;
    private final JwtUtil jwtUtil;

    public AuthService(OtpRepository otpRepo, JwtUtil jwtUtil) {
        this.otpRepo = otpRepo;
        this.jwtUtil = jwtUtil;
    }

    public String sendOtp(String mobile) {
        String otp = "123456"; // mock
        otpRepo.saveOtp(mobile, otp);
        return otp;
    }

    public String verifyOtp(String mobile, String otp) {
        String dbOtp = otpRepo.getOtp(mobile)
                .orElseThrow(() -> new RuntimeException("OTP not found"));

        if (!dbOtp.equals(otp)) throw new RuntimeException("Invalid OTP");

        otpRepo.deleteOtp(mobile);
        return jwtUtil.generateToken(mobile, "CANDIDATE");
    }
}
