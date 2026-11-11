-- ===================================================================
-- FDMS BANGLADESH - PostgreSQL Relational Database Schema (3NF)
-- Fertilizer Dealer & Distribution Management System (Course: CSE 3292)
-- Compatible with PostgreSQL 15, 16, 17, 18
-- ===================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -------------------------------------------------------------------
-- 1. ENUM TYPES DEFINITIONS
-- -------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE USER_ROLE AS ENUM ('SUPER_ADMIN', 'UAO', 'DEALER', 'POS_OPERATOR', 'SAAO');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE DEALER_STATUS AS ENUM ('ACTIVE', 'SUSPENDED', 'BLACKLISTED', 'TERMINATED');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE FERT_TYPE AS ENUM ('UREA', 'TSP', 'DAP', 'MOP');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE DO_STATUS AS ENUM ('ALLOCATED', 'CHALLAN_VERIFIED', 'LIFTED', 'CANCELLED');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE CROP_TYPE AS ENUM ('BORO_RICE', 'AMAN_RICE', 'WHEAT', 'MUSTARD', 'MAIZE', 'VEGETABLES');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE PAY_METHOD AS ENUM ('CASH', 'MFS_BKASH_NAGAD', 'KRISHAK_WALLET');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- -------------------------------------------------------------------
-- 2. CORE TABLES (3rd Normal Form)
-- -------------------------------------------------------------------

-- Table 1: USERS (Authentication & Role-Based Access Control)
CREATE TABLE IF NOT EXISTS users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nid_no VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table 2: DEALERS (Approved Union Dealership Units)
CREATE TABLE IF NOT EXISTS dealers (
    dealer_id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    trade_license VARCHAR(50) UNIQUE NOT NULL,
    union_id INT NOT NULL,
    unit_number INT CHECK (unit_number BETWEEN 1 AND 3),
    main_godown VARCHAR(150) NOT NULL,
    security_dep NUMERIC(12, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE'
);

-- Table 3: RETAIL_OUTLETS (Ward-Level Point-of-Sale Points)
CREATE TABLE IF NOT EXISTS retail_outlets (
    outlet_id BIGSERIAL PRIMARY KEY,
    dealer_id BIGINT NOT NULL REFERENCES dealers(dealer_id) ON DELETE CASCADE,
    operator_id UUID NOT NULL REFERENCES users(user_id),
    ward_number INT CHECK (ward_number BETWEEN 1 AND 9),
    market_name VARCHAR(100) NOT NULL,
    geo_lat DECIMAL(10, 8),
    geo_long DECIMAL(10, 8)
);

-- Table 4: ALLOTMENTS_DO (Delivery Orders & Quotas)
CREATE TABLE IF NOT EXISTS allotments_do (
    do_id BIGSERIAL PRIMARY KEY,
    do_number VARCHAR(50) UNIQUE NOT NULL,
    dealer_id BIGINT NOT NULL REFERENCES dealers(dealer_id),
    fertilizer_type VARCHAR(20) NOT NULL,
    quantity_mt NUMERIC(8, 2) CHECK (quantity_mt > 0),
    buffer_godown VARCHAR(100) NOT NULL,
    challan_id BIGINT,
    status VARCHAR(20) NOT NULL DEFAULT 'ALLOCATED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table 5: INVENTORY_LEDGERS (Multi-Tier Stock Tracking with ACID Locks)
CREATE TABLE IF NOT EXISTS inventory_ledgers (
    ledger_id BIGSERIAL PRIMARY KEY,
    dealer_id BIGINT REFERENCES dealers(dealer_id),
    outlet_id BIGINT REFERENCES retail_outlets(outlet_id),
    fertilizer_type VARCHAR(20) NOT NULL,
    opening_bags INT DEFAULT 0 CHECK (opening_bags >= 0),
    inward_bags INT DEFAULT 0 CHECK (inward_bags >= 0),
    sold_bags INT DEFAULT 0 CHECK (sold_bags >= 0),
    closing_bags INT DEFAULT 0 CHECK (closing_bags >= 0),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_inventory_target CHECK (dealer_id IS NOT NULL OR outlet_id IS NOT NULL)
);

-- Table 6: FARMERS (Registered Cultivator Profiles)
CREATE TABLE IF NOT EXISTS farmers (
    farmer_id BIGSERIAL PRIMARY KEY,
    nid_number VARCHAR(20) UNIQUE NOT NULL,
    krishak_card_no VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    land_decimals NUMERIC(8, 2) CHECK (land_decimals > 0),
    current_crop VARCHAR(30) NOT NULL,
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table 7: SALES_TRANSACTIONS (Point-of-Sale Invoices)
CREATE TABLE IF NOT EXISTS sales_transactions (
    transaction_id BIGSERIAL PRIMARY KEY,
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    farmer_id BIGINT NOT NULL REFERENCES farmers(farmer_id),
    outlet_id BIGINT NOT NULL REFERENCES retail_outlets(outlet_id),
    total_price_mrp NUMERIC(10, 2) NOT NULL,
    govt_subsidy NUMERIC(10, 2) NOT NULL,
    qr_token VARCHAR(255) UNIQUE NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    transaction_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table 8: SALES_ITEMS (Itemized Fertilizer Sales & Subsidies)
CREATE TABLE IF NOT EXISTS sales_items (
    item_id BIGSERIAL PRIMARY KEY,
    transaction_id BIGINT NOT NULL REFERENCES sales_transactions(transaction_id) ON DELETE CASCADE,
    fertilizer_type VARCHAR(20) NOT NULL,
    quantity_bags INT NOT NULL CHECK (quantity_bags > 0),
    quantity_kg NUMERIC(8, 2) NOT NULL,
    unit_price_mrp NUMERIC(8, 2) NOT NULL,
    item_total_mrp NUMERIC(10, 2) NOT NULL,
    subsidy_amount NUMERIC(10, 2) NOT NULL
);

-- -------------------------------------------------------------------
-- 3. INDEXES FOR PERFORMANCE & CONCURRENCY
-- -------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_users_nid ON users(nid_no);
CREATE INDEX IF NOT EXISTS idx_dealers_union ON dealers(union_id);
CREATE INDEX IF NOT EXISTS idx_farmers_nid ON farmers(nid_number);
CREATE INDEX IF NOT EXISTS idx_farmers_krishak ON farmers(krishak_card_no);
CREATE INDEX IF NOT EXISTS idx_ledger_outlet_fert ON inventory_ledgers(outlet_id, fertilizer_type);
CREATE INDEX IF NOT EXISTS idx_transactions_invoice ON sales_transactions(invoice_number);
CREATE INDEX IF NOT EXISTS idx_transactions_qr ON sales_transactions(qr_token);

