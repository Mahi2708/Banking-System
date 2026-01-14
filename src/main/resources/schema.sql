CREATE TABLE IF NOT EXISTS admins (
                                      admin_id SERIAL PRIMARY KEY,
                                      name VARCHAR(100),
                                      mobile VARCHAR(15) UNIQUE NOT NULL,
                                      password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS candidates (
                                          candidate_id SERIAL PRIMARY KEY,
                                          name VARCHAR(100) NOT NULL,
                                          mobile VARCHAR(15) UNIQUE NOT NULL,
                                          email VARCHAR(100),
                                          address TEXT,
                                          banking_id VARCHAR(20) UNIQUE, -- will be NULL until approved
                                          status VARCHAR(20) DEFAULT 'PENDING'
);

-- ✅ Account linked to candidate_id (better)
CREATE TABLE IF NOT EXISTS accounts (
                                        account_id SERIAL PRIMARY KEY,
                                        candidate_id INT UNIQUE NOT NULL,
                                        banking_id VARCHAR(20) UNIQUE NOT NULL,
                                        balance NUMERIC(15,2) DEFAULT 0,

                                        FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id)
);

CREATE TABLE IF NOT EXISTS otp_store (
                                         mobile VARCHAR(15) PRIMARY KEY,
                                         otp VARCHAR(6),
                                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transactions (
                                            txn_id SERIAL PRIMARY KEY,
                                            from_banking_id VARCHAR(20),
                                            to_banking_id VARCHAR(20),
                                            txn_type VARCHAR(20),
                                            amount NUMERIC(15,2) NOT NULL,
                                            txn_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                            status VARCHAR(20) DEFAULT 'SUCCESS'
);

