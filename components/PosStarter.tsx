"use client";

import { useEffect, useMemo, useState } from "react";
import { deliveryAreas } from "./DeliveryAreas";

type Role = "admin" | "staff" | "driver";

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

const users: Record<string, { password: string; role: Role; label: string }> = {
  admin: { password: "admin123", role: "admin", label: "Admin" },
  staff: { password: "staff123", role: "staff", label: "Staff" },
  driver1: { password: "driver123", role: "driver", label: "Driver 1" },
  driver2: { password: "driver456", role: "driver", label: "Driver 2" },
};

const initialSales: Sale[] = [
  {
    id: 1,
    customer: "Bhedetar View Hotel",
    location: "Dhankuta",
    amount: 3600,
    paid: 2600,
    creditDays: 7,
    date: "2026-05-16",
    enteredBy: "admin",
  },
  {
    id: 2,
    customer: "Hiking Crew Order",
    location: "Dharan",
    amount: 1800,
    paid: 1800,
    creditDays: 0,
    date: "2026-05-16",
    enteredBy: "staff",
  },
];

export default function PosStarter() {
  const [sales, setSales] = useState<Sale[]>(initialSales);
  const [session, setSession] = useState<{ id: string; role: Role; label: string } | null>(null);
  const [login, setLogin] = useState({ userId: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState({
    customer: "",
    location: "Dharan",
    amount: "",
    paid: "",
    creditDays: "7",
  });
  const [savingSale, setSavingSale] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadSales() {
      try {
        const response = await fetch("/api/sales");
        if (response.ok) {
          const payload = await response.json();
          if (Array.isArray(payload.sales) && payload.sales.length > 0) {
            setSales(payload.sales);
            setServerMessage("Loaded sales from the server.");
            return;
          }
        }
      } catch {
        // ignore fetch errors and keep local fallback
      }

      const saved = window.localStorage.getItem("bhedetar-pos-sales");
      if (saved) {
        setSales(JSON.parse(saved) as Sale[]);
      }
    }

    loadSales();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bhedetar-pos-sales", JSON.stringify(sales));
  }, [sales]);

  const totals = useMemo(() => {
    return sales.reduce(
      (acc, sale) => {
        acc.sold += sale.amount;
        acc.paid += sale.paid;
        acc.credit += Math.max(sale.amount - sale.paid, 0);
        return acc;
      },
      { sold: 0, paid: 0, credit: 0 }
    );
  }, [sales]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = users[login.userId.trim()];

    if (!user || user.password !== login.password) {
      setLoginError("Invalid internal ID or password.");
      return;
    }

    setSession({ id: login.userId.trim(), role: user.role, label: user.label });
    setLogin({ userId: "", password: "" });
    setLoginError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!session) {
      return;
    }

    const amount = Number(form.amount);
    const paid = Number(form.paid);
    const creditDays = Number(form.creditDays);

    if (!form.customer || !form.location || Number.isNaN(amount) || Number.isNaN(paid)) {
      setSaveError("Please fill all required fields with valid amounts.");
      return;
    }

    setSavingSale(true);
    setSaveError(null);
    setServerMessage(null);

    const payload = {
      customer: form.customer,
      location: form.location,
      amount,
      paid,
      creditDays: Number.isNaN(creditDays) ? 0 : creditDays,
      date: new Date().toISOString().slice(0, 10),
      enteredBy: session.id,
    };

    try {
      const response = await fetch("/api/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to save sale.");
      }

      setSales((current) => [result.sale, ...current]);
      setForm({ customer: "", location: "Dharan", amount: "", paid: "", creditDays: "7" });
      setServerMessage("Sale saved to the database.");
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Unable to save sale.");
      setSales((current) => [
        {
          id: Date.now(),
          customer: form.customer,
          location: form.location,
          amount,
          paid,
          creditDays: Number.isNaN(creditDays) ? 0 : creditDays,
          date: new Date().toISOString().slice(0, 10),
          enteredBy: session.id,
        },
        ...current,
      ]);
      setServerMessage("Sale recorded locally because server save failed.");
    } finally {
      setSavingSale(false);
    }
  };

  const holdUntil = (sale: Sale) => {
    const date = new Date(`${sale.date}T00:00:00`);
    date.setDate(date.getDate() + sale.creditDays);
    return date.toLocaleDateString("en-CA");
  };

  return (
    <section id="pos" className="bg-[#f8fafc] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Internal access
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#0a2540] md:text-6xl">
            Staff sales and credit ledger.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            POS records are not shown to public visitors. Admin, staff, and
            drivers must sign in before viewing customer credit details.
          </p>
        </div>

        {!session ? (
          <form onSubmit={handleLogin} className="max-w-md border border-[#dbeafe] bg-white p-6 shadow-sm">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#0a2540]">Internal ID</span>
              <input
                value={login.userId}
                onChange={(event) => setLogin((current) => ({ ...current, userId: event.target.value }))}
                className="w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30"
                placeholder="admin, staff, driver1, driver2"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-[#0a2540]">Password</span>
              <input
                type="password"
                value={login.password}
                onChange={(event) => setLogin((current) => ({ ...current, password: event.target.value }))}
                className="w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30"
                placeholder="Password"
              />
            </label>
            {loginError && <p className="mt-3 text-sm font-bold text-[#b91c1c]">{loginError}</p>}
            <button className="mt-5 w-full bg-[#0a2540] py-3 font-bold text-white transition hover:bg-[#0e6ba8]">
              Sign in
            </button>
          </form>
        ) : (
          <>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[#475569]">
                Signed in as <strong className="text-[#0a2540]">{session.label}</strong>.
              </p>
              <button
                onClick={() => setSession(null)}
                className="border border-[#cbd5e1] bg-white px-4 py-2 font-bold text-[#0a2540] hover:border-[#0e6ba8]"
              >
                Sign out
              </button>
            </div>

            <div className="mb-8 grid grid-cols-3 border border-[#dbeafe] bg-white text-center md:max-w-xl">
              {[
                ["Sold", totals.sold],
                ["Paid", totals.paid],
                ["Credit", totals.credit],
              ].map(([label, value]) => (
                <div key={label} className="border-r border-[#dbeafe] p-4 last:border-r-0">
                  <p className="text-xs font-bold uppercase text-[#64748b]">{label}</p>
                  <p className="mt-1 text-xl font-bold text-[#0a2540]">Rs. {value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <form onSubmit={handleSubmit} className="border border-[#dbeafe] bg-white p-5">
                {serverMessage && (
                  <div className="mb-4 rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-4 text-sm text-[#166534]">
                    {serverMessage}
                  </div>
                )}
                {saveError && (
                  <div className="mb-4 rounded-2xl border border-[#fecaca] bg-[#fef2f2] p-4 text-sm text-[#991b1c]">
                    {saveError}
                  </div>
                )}
                <div className="grid gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[#0a2540]">Customer name</span>
                    <input value={form.customer} onChange={(event) => setForm((current) => ({ ...current, customer: event.target.value }))} className="w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30" placeholder="Customer or shop name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[#0a2540]">Delivery area</span>
                    <select value={form.location} onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))} className="w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30">
                      {deliveryAreas.map((area) => (
                        <option key={area}>{area}</option>
                      ))}
                    </select>
                  </label>
                  {[
                    ["amount", "Sold amount", "3600"],
                    ["paid", "Paid amount", "2600"],
                    ["creditDays", "Credit hold days", "7"],
                  ].map(([name, label, placeholder]) => (
                    <label key={name} className="block">
                      <span className="mb-2 block text-sm font-bold text-[#0a2540]">{label}</span>
                      <input
                        type="number"
                        min="0"
                        value={form[name as keyof typeof form]}
                        onChange={(event) =>
                          setForm((current) => ({ ...current, [name]: event.target.value }))
                        }
                        placeholder={placeholder}
                        className="w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30"
                      />
                    </label>
                  ))}
                  <button
                    type="submit"
                    disabled={savingSale}
                    className="bg-[#0a2540] px-5 py-3 font-bold text-white transition hover:bg-[#0e6ba8] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {savingSale ? "Saving sale…" : "Add sale record"}
                  </button>
                </div>
              </form>

              <div className="overflow-x-auto border border-[#dbeafe] bg-white">
                <div className="min-w-[720px]">
                  <div className="grid grid-cols-[1.2fr_0.9fr_0.7fr_0.7fr_0.9fr_0.7fr] bg-[#0a2540] px-4 py-3 text-sm font-bold text-white">
                    <span>Customer</span>
                    <span>Area</span>
                    <span>Paid</span>
                    <span>Credit</span>
                    <span>Hold until</span>
                    <span>By</span>
                  </div>
                  {sales.map((sale) => {
                    const credit = Math.max(sale.amount - sale.paid, 0);
                    return (
                      <div
                        key={sale.id}
                        className="grid grid-cols-[1.2fr_0.9fr_0.7fr_0.7fr_0.9fr_0.7fr] gap-2 border-t border-[#e2e8f0] px-4 py-4 text-sm text-[#334155]"
                      >
                        <span className="font-bold text-[#0a2540]">{sale.customer}</span>
                        <span>{sale.location}</span>
                        <span>Rs. {sale.paid}</span>
                        <span className={credit > 0 ? "font-bold text-[#b45309]" : "text-[#15803d]"}>
                          Rs. {credit}
                        </span>
                        <span>{credit > 0 ? holdUntil(sale) : "Paid"}</span>
                        <span>{sale.enteredBy}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
