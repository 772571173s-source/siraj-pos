import Database from "better-sqlite3"

const db = new Database("siraj.db")

db.pragma("foreign_keys = ON")

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run()

db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    barcode TEXT,
    category TEXT,
    unit TEXT,
    stock REAL DEFAULT 0,
    purchase_price REAL DEFAULT 0,
    sale_price REAL DEFAULT 0,
    min_stock REAL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run()

console.log("✅ Database initialized successfully")

export default db