"use client";

import { useEffect, useState } from "react";

type Inquiry = {
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

type Sale = {
  id: number;
  customer: string;
  location: string;
  amount: number;
  paid: number;
  creditDays: number;
  date: string;
  enteredBy: string;
};

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [inquiriesRes, salesRes] = await Promise.all([
          fetch("/api/inquiries"),
          fetch("/api/sales"),
        ]);

        if (!inquiriesRes.ok || !salesRes.ok) {
          throw new Error("Unable to load admin data.");
        }

        const inquiriesJson = await inquiriesRes.json();
        const salesJson = await salesRes.json();

        setInquiries(inquiriesJson.inquiries ?? []);
        setSales(salesJson.sales ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section className="min-h-screen bg-[#f8fafc] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-3xl border border-[#dbeafe] bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-[#0a2540]">Bhedetar Admin</h1>
          <p className="mt-3 text-lg text-[#475569]">
          </p>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-[#dbeafe] bg-white p-10 text-center text-[#0a2540]">Loading admin data…</div>
        ) : error ? (
          <div className="rounded-3xl border border-[#fecaca] bg-[#fef2f2] p-10 text-[#991b1b]">{error}</div>
        ) : (
          <div className="space-y-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[#dbeafe] bg-white p-8">
                <h2 className="mb-4 text-2xl font-bold text-[#0a2540]">Recent inquiries</h2>
                <p className="mb-6 text-sm text-[#64748b]">Customer order requests saved to the database.</p>
                {inquiries.length === 0 ? (
                  <p className="text-[#475569]">No inquiries yet.</p>
                ) : (
                  <div className="space-y-4">
                    {inquiries.slice(0, 8).map((inquiry) => (
                      <div key={inquiry.id} className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-base font-semibold text-[#0a2540]">{inquiry.name}</p>
                          <span className="text-sm text-[#64748b]">{new Date(inquiry.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#475569]">{inquiry.eventType} • {inquiry.bottleSize} • Qty {inquiry.quantity}</p>
                        <p className="mt-2 text-sm text-[#0a2540]">{inquiry.message || "No extra message."}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-[#dbeafe] bg-white p-8">
                <h2 className="mb-4 text-2xl font-bold text-[#0a2540]">Latest sales</h2>
                <p className="mb-6 text-sm text-[#64748b]">Orders and credit records from the POS system.</p>
                {sales.length === 0 ? (
                  <p className="text-[#475569]">No sales recorded yet.</p>
                ) : (
                  <div className="space-y-4">
                    {sales.slice(0, 8).map((sale) => (
                      <div key={sale.id} className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-base font-semibold text-[#0a2540]">{sale.customer}</p>
                          <span className="text-sm text-[#64748b]">{sale.date}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#475569]">Amount: Rs. {sale.amount} • Paid: Rs. {sale.paid} • Credit: Rs. {Math.max(sale.amount - sale.paid, 0)}</p>
                        <p className="mt-2 text-sm text-[#0a2540]">Entered by: {sale.enteredBy}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
