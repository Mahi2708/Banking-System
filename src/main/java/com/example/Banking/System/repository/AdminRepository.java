package com.example.Banking.System.repository;

import com.example.Banking.System.model.Admin;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {

    private final JdbcTemplate jdbcTemplate;

    public AdminRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<Admin> findByMobile(String mobile) {
        List<Admin> list = jdbcTemplate.query(
                "SELECT * FROM admins WHERE mobile=?",
                (rs, rn) -> {
                    Admin a = new Admin();
                    a.setAdminId(rs.getLong("admin_id"));
                    a.setName(rs.getString("name"));
                    a.setMobile(rs.getString("mobile"));
                    a.setPassword(rs.getString("password"));
                    return a;
                },
                mobile
        );
        return list.stream().findFirst();
    }
}
