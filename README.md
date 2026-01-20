# 🏦 Banking System (Full Stack Project)

A complete **Banking System Web Application** built using:

- ✅ **React + Material UI** (Frontend)
- ✅ **Spring Boot + Spring Security + JDBC** (Backend)
- ✅ **PostgreSQL** (Database)
- ✅ REST APIs + JWT Authentication (OTP-based login)

This project supports:
- Candidate registration with banking ID generation
- OTP-based login using mobile number
- Candidate dashboard (Deposit / Withdraw / Transfer / History)
- Admin login and admin panel
- Admin can view candidates and approve/block accounts

---

## 📌 Project Features

### ✅ Candidate Side
- Register with personal details
- Login using OTP
- View Profile
- Deposit money
- Withdraw money
- Transfer money
- Transaction History
- Logout

### ✅ Admin Side
- Admin login (mobile + password)
- View all registered candidates
- Approve candidates
- Block candidates

---

## 🏗️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React, Material UI, Axios, React Router DOM |
| Backend | Spring Boot, Spring Web, Spring Security, JDBC |
| Database | PostgreSQL |
| Auth | OTP Login + JWT Token |
| IDE | IntelliJ IDEA |

---

## 📁 Project Structure

Banking-System/
│
├── backend/ # Spring Boot Project
├── banking-frontend/ # React Project
├── README.md
└── .gitignore


---

# 🚀 How to Fork & Clone

## ✅ Step 1: Fork this Repository
1. Go to this repository on GitHub
2. Click the **Fork** button (top right)
3. A copy of the repository will be created in your GitHub account

---

## ✅ Step 2: Clone the Forked Repo
Open Git Bash / Terminal and run:

```bash
git clone https://github.com/<your-username>/Banking-System.git
Move into the project folder:

cd Banking-System
✅ Setup & Run (Complete Guide)
🧩 1. PostgreSQL Database Setup
✅ Step 1: Create database
Open pgAdmin or psql and run:

CREATE DATABASE bankingdb;
✅ Step 2: Verify DB created
\l
🔥 2. Backend Setup (Spring Boot)
✅ Step 1: Open Backend Project
Open the backend folder inside IntelliJ:

Banking-System/backend
✅ Step 2: Configure Database Connection
Open:

📌 backend/src/main/resources/application.properties

Update:

spring.datasource.url=jdbc:postgresql://localhost:5432/bankingdb
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:schema.sql

jwt.secret=THIS_IS_A_32_CHAR_SECRET_KEY_123456
jwt.expiration=86400000
✅ Replace YOUR_PASSWORD with your PostgreSQL password.

✅ Step 3: Run Backend
Run this file:

📌 backend/src/main/java/.../BankingSystemApplication.java

Or using terminal inside backend/:

mvn spring-boot:run
Backend will start at:

✅ http://localhost:8080

🎨 3. Frontend Setup (React)
✅ Step 1: Open frontend folder
cd banking-frontend
✅ Step 2: Install dependencies
npm install
✅ Step 3: Run frontend
npm start
Frontend runs at:

✅ http://localhost:3000

🔑 Default Admin Credentials
Field	Value
Mobile	9999999999
Password	admin123
(If you changed admin password in DB, use updated password.)

📌 API Endpoints
✅ Candidate APIs
Method	Endpoint	Description
POST	/api/candidate/register	Register candidate
GET	/api/candidate/profile?mobile=	Get candidate profile
✅ OTP Auth APIs
Method	Endpoint	Description
POST	/api/auth/send-otp	Send OTP
POST	/api/auth/verify-otp	Verify OTP & get JWT
✅ Transaction APIs (JWT Protected)
Method	Endpoint	Description
POST	/api/txn/deposit	Deposit money
POST	/api/txn/withdraw	Withdraw money
POST	/api/txn/transfer	Transfer money
GET	/api/txn/history/{bankingId}	Get transaction history
✅ Admin APIs
Method	Endpoint	Description
POST	/api/admin/login	Admin Login
GET	/api/admin/candidates	View all candidates
POST	/api/admin/approve/{id}	Approve candidate
POST	/api/admin/block/{bankingId}	Block candidate
✅ Common Errors & Fix
❌ 403 Forbidden / Access Denied
✅ Fix: Ensure API endpoints are permitted in SecurityConfig.java and token is sent.

❌ Database connection error
✅ Fix:

PostgreSQL service running

correct username/password

DB exists

❌ "Module not found" in React
✅ Fix:

check image/file path

check filename extension (.svg/.png)

📌 How to Push Changes to GitHub
After editing:

git add .
git commit -m "updated project"
git push origin main
👨‍💻 Author
Developed by Mahanthesh S
Full Stack Banking System Project using React + Spring Boot + PostgreSQL

✅ License
This project is for learning and educational purposes.


