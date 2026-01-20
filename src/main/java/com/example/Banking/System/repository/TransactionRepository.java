package com.example.Banking.System.repository;

import com.example.Banking.System.model.Transaction;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TransactionRepository {

    private final JdbcTemplate jdbcTemplate;

    public TransactionRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Transaction> mapper = (rs, rn) -> {
        Transaction t = new Transaction();
        t.setTxnId(rs.getLong("txn_id"));
        t.setFromBankingId(rs.getString("from_banking_id"));
        t.setToBankingId(rs.getString("to_banking_id"));
        t.setTxnType(rs.getString("txn_type"));
        t.setAmount(rs.getBigDecimal("amount"));
        t.setTxnTime(rs.getTimestamp("txn_time").toLocalDateTime());
        t.setStatus(rs.getString("status"));
        return t;
    };

    public int save(Transaction t) {
        return jdbcTemplate.update(
                "INSERT INTO transactions(from_banking_id,to_banking_id,txn_type,amount,status) VALUES(?,?,?,?,?)",
                t.getFromBankingId(),
                t.getToBankingId(),
                t.getTxnType(),
                t.getAmount(),
                t.getStatus()
        );
    }

    public List<Transaction> history(String bankingId) {
        return jdbcTemplate.query(
                "SELECT * FROM transactions WHERE from_banking_id=? OR to_banking_id=? ORDER BY txn_time DESC",
                mapper,
                bankingId, bankingId
        );
    }
}
