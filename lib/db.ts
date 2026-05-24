import fs from "fs";
import path from "path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const dbPath = path.join(process.cwd(), "data", "bhedetar-db.json");
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export type Inquiry = {
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
};

export type Sale = {
  id: number;
  customer: string;
  location: string;
  amount: number;
  paid: number;
  creditDays: number;
  date: string;
  enteredBy: string;
};

type Data = {
  inquiries: Inquiry[];
  sales: Sale[];
};

const adapter = new JSONFile<Data>(dbPath);
const db = new Low<Data>(adapter);

async function initDb() {
  await db.read();
  db.data ||= { inquiries: [], sales: [] };
  await db.write();
  return db;
}

export async function createInquiry(inquiry: Inquiry) {
  const database = await initDb();
  database.data!.inquiries.unshift(inquiry);
  await database.write();
  return inquiry;
}

export async function getInquiries() {
  const database = await initDb();
  return database.data!.inquiries.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function createSale(sale: Omit<Sale, "id">) {
  const database = await initDb();
  const nextId = (database.data!.sales[0]?.id ?? 0) + 1;
  const newSale: Sale = { id: nextId, ...sale };
  database.data!.sales.unshift(newSale);
  await database.write();
  return newSale;
}

export async function getSales() {
  const database = await initDb();
  return database.data!.sales.sort((a, b) => (a.date < b.date || (a.date === b.date && a.id < b.id) ? 1 : -1));
}
