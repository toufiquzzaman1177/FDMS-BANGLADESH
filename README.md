# FDMS BANGLADESH

Fertilizer Dealer & Distribution Management System - Bangladesh  
**Course:** CSE 3292 (Software Development III)

---

## 🛠️ Technical Stack
- **Backend:** Java 21 LTS, Spring Boot 3.3.5 (Virtual Threads / Project Loom)
- **Database:** PostgreSQL (15, 16, 17, 18)
- **Security:** Spring Security 6 + JWT (Role-Based Access Control: SUPER_ADMIN, UAO, DEALER, POS_OPERATOR, SAAO)
- **Frontend:** React 19 (Vite), Tailwind CSS, Lucide Icons

---

## 📁 Project Structure

```text
FDMS BANGLADESH/
├── backend/                  # Spring Boot 3.3+ & Java 21 Backend
│   ├── mvnw / mvnw.cmd       # Maven Wrapper
│   ├── pom.xml               # Dependencies (Web, JPA, Security, PostgreSQL, JWT, Lombok)
│   └── src/main/java/com/fdms/
│       └── FdmsBackendApplication.java  # Spring Boot Main Application Class
├── database/                 # PostgreSQL Relational Database Schema
│   └── schema.sql            # Complete 3NF DDL schema with indexes and constraints
├── documantation/            # Project SRS, ERD Diagram, and Proposal
├── frontend/                 # React Client Application (Vite + Tailwind CSS)
└── uploads/                  # Uploaded Documents & Media
```

---

## 🚀 Getting Started

### 1. Database Setup (PostgreSQL)
Create the database and execute the schema:
```bash
psql -U postgres -d postgres -c "CREATE DATABASE fdms_bangladesh;"
psql -U postgres -d fdms_bangladesh -f database/schema.sql
```

### 2. Backend (Java 21 & Spring Boot)
```bash
cd backend
./mvnw.cmd clean compile
./mvnw.cmd spring-boot:run
```
Runs at: `http://localhost:8080`  
Key REST Endpoints:
- `POST /api/auth/login` - User authentication (Phone/NID + password)
- `POST /api/auth/register` - User registration
- `GET /api/farmers/verify/{identifier}` - Farmer verification by NID or Krishak Card
- `POST /api/pos/checkout` - Smart POS sale with quota ceiling & ACID inventory lock
- `GET /api/public/mrp-rates` - Government official MRP prices

### 3. Frontend (React 19 + Tailwind CSS)
```bash
cd frontend
npm install
npm run dev
```
Runs locally at: `http://localhost:5173`

---

## 👥 Developed By (Team Two Factor)
- **Md. Toufiquzzaman** (Team Leader) — ID: `41240102158` • [toufiquzzaman1177](https://github.com/toufiquzzaman1177)
- **Md. Fahad Hossain** (Team Member) — ID: `41240102109` • [mdfahadhossain10](https://github.com/mdfahadhossain10)

