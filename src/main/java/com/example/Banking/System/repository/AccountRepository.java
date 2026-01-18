package com.example.Banking.System.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public class AccountRepository {

    private final JdbcTemplate jdbcTemplate;

    public AccountRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int createAccount(String bankingId) {
        return jdbcTemplate.update("INSERT INTO accounts(banking_id, balance) VALUES(?,0)", bankingId);
    }

    public Optional<BigDecimal> getBalance(String bankingId) {
        List<BigDecimal> list = jdbcTemplate.query(
                "SELECT balance FROM accounts WHERE banking_id=?",
                (rs, rn) -> rs.getBigDecimal("balance"),
                bankingId
        );
        return list.stream().findFirst();
    }

    public int updateBalance(String bankingId, BigDecimal bal) {
        return jdbcTemplate.update("UPDATE accounts SET balance=? WHERE banking_id=?", bal, bankingId);
    }

    public boolean exists(String bankingId) {
        Integer cnt = jdbcTemplate.queryForObject(
                "SELECT COUNT(*) FROM accounts WHERE banking_id=?",
                Integer.class,
                bankingId
        );
        return cnt != null && cnt > 0;
    }
}
