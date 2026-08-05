import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "inquiries.db");
const db = new Database(dbPath);

// Create inquiries table
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT NOT NULL,
    eventType TEXT NOT NULL,
    bottleSize TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    wrapperNeed TEXT NOT NULL,
    message TEXT,
    createdAt TEXT NOT NULL
  )
`);

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  location: string;
  eventType: string;
  bottleSize: string;
  quantity: number;
  wrapperNeed: string;
  message: string;
  createdAt: string;
}

export async function createInquiry(inquiry: Inquiry) {
  const stmt = db.prepare(`
    INSERT INTO inquiries (
      id,
      name,
      phone,
      location,
      eventType,
      bottleSize,
      quantity,
      wrapperNeed,
      message,
      createdAt
    )
    VALUES (
      @id,
      @name,
      @phone,
      @location,
      @eventType,
      @bottleSize,
      @quantity,
      @wrapperNeed,
      @message,
      @createdAt
    )
  `);

  stmt.run(inquiry);

  return inquiry;
}

export async function getInquiries(): Promise<Inquiry[]> {
  const stmt = db.prepare(`
    SELECT *
    FROM inquiries
    ORDER BY createdAt DESC
  `);

  return stmt.all() as Inquiry[];
}

export default db;

