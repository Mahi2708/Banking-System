package com.example.Banking.System.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class OtpRepository {

    private final JdbcTemplate jdbcTemplate;

    public OtpRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void saveOtp(String mobile, String otp) {
        jdbcTemplate.update(
                "INSERT INTO otp_store(mobile, otp) VALUES(?, ?) " +
                        "ON CONFLICT(mobile) DO UPDATE SET otp=EXCLUDED.otp, created_at=CURRENT_TIMESTAMP",
                mobile, otp
        );
    }

    public Optional<String> getOtp(String mobile) {
        List<String> list = jdbcTemplate.query(
                "SELECT otp FROM otp_store WHERE mobile=?",
                (rs, rn) -> rs.getString("otp"),
                mobile
        );
        return list.stream().findFirst();
    }

    public void deleteOtp(String mobile) {
        jdbcTemplate.update("DELETE FROM otp_store WHERE mobile=?", mobile);
    }
}
