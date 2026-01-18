package com.example.Banking.System.repository;

import com.example.Banking.System.model.Candidate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CandidateRepository {

    private final JdbcTemplate jdbcTemplate;

    public CandidateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Candidate> mapper = (rs, rowNum) -> {
        Candidate c = new Candidate();
        c.setCandidateId(rs.getLong("candidate_id"));
        c.setName(rs.getString("name"));
        c.setMobile(rs.getString("mobile"));
        c.setEmail(rs.getString("email"));
        c.setAddress(rs.getString("address"));
        c.setBankingId(rs.getString("banking_id"));
        c.setStatus(rs.getString("status"));
        return c;
    };

    public int save(Candidate c) {
        return jdbcTemplate.update(
                "INSERT INTO candidates(name, mobile, email, address, banking_id, status) VALUES(?,?,?,?,?,?)",
                c.getName(), c.getMobile(), c.getEmail(), c.getAddress(), c.getBankingId(), c.getStatus()
        );
    }

    public Optional<Candidate> findByMobile(String mobile) {
        List<Candidate> list = jdbcTemplate.query("SELECT * FROM candidates WHERE mobile=?", mapper, mobile);
        return list.stream().findFirst();
    }

    public Optional<Candidate> findByBankingId(String bankingId) {
        List<Candidate> list = jdbcTemplate.query("SELECT * FROM candidates WHERE banking_id=?", mapper, bankingId);
        return list.stream().findFirst();
    }

    public List<Candidate> findAll() {
        return jdbcTemplate.query("SELECT * FROM candidates ORDER BY candidate_id DESC", mapper);
    }

    public int approveCandidate(Long candidateId) {
        return jdbcTemplate.update("UPDATE candidates SET status='ACTIVE' WHERE candidate_id=?", candidateId);
    }

    public int updateStatus(String bankingId, String status) {
        return jdbcTemplate.update("UPDATE candidates SET status=? WHERE banking_id=?", status, bankingId);
    }
}
