"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { deliveryAreas } from "./DeliveryAreas";

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  location: string;
  eventType: string;
  bottleSize: string;
  quantity: string;
  wrapperNeed: string;
  message: string;
  createdAt: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Dharan",
    eventType: "Wedding",
    bottleSize: "500ml",
    quantity: "",
    wrapperNeed: "Need custom wrapper design",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setSubmitting(true);
  setErrorMessage(null);

    const inquiry: Inquiry = {
      id: `BS-${Date.now().toString().slice(-6)}`,
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const toastId = toast.loading("Sending your inquiry...");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to submit inquiry");
      }

      if (!payload.emailSent) {
        throw new Error(payload.error || "Email was not sent");
      }
toast.success("Inquiry submitted successfully!", {
  id: toastId,
  duration: 3000,
});

      setFormData({
        name: "",
        phone: "",
        location: "Dharan",
        eventType: "Wedding",
        bottleSize: "500ml",
        quantity: "",
        wrapperNeed: "Need custom wrapper design",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Submission failed";

      toast.error(message, { id: toastId });
      setErrorMessage(message);
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full border border-[#cbd5e1] px-3 py-3 text-[#0a2540] outline-none transition focus:border-[#0e6ba8] focus:ring-2 focus:ring-[#38bdf8]/30";

  return (
    <section id="contact" className="bg-[#f8fafc] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Inquiry
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#0a2540] md:text-6xl">
            Tell us what bottle you need.
          </h2>
         
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#dbeafe] bg-white p-6">
            <h3 className="text-2xl font-bold text-[#0a2540]">Contact details</h3>
            <div className="mt-8 space-y-6">
              {[
                ["Location", "Bhedetar, Dhankuta, Nepal"],
                ["Phone", "+977-9904339998"],
                ["Email", "bhedetarspringbottlers@gmail.com"],
                ["Delivery", deliveryAreas.join(", ")],
                ["Orders", "Retail, wholesale, custom wrappers, and event supply"],
              ].map(([label, value]) => (
                <div key={label} className="border-l-4 border-[#38bdf8] pl-4">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#64748b]">
                    {label}
                  </p>
                  <p className="mt-1 text-[#0a2540]">{value}</p>
                </div>
              ))}
            </div>

          </div>

          <form onSubmit={handleSubmit} className="border border-[#dbeafe] bg-white p-6">
           
            {errorMessage && (
              <div className="mb-4 rounded-2xl border border-[#fecaca] bg-[#fef2f2] p-4 text-sm text-[#991b1b]">
                {errorMessage}
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Full name</span>
                <input name="name" value={formData.name} onChange={handleChange} required className={fieldClass} placeholder="Client name" />
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Phone</span>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className={fieldClass} placeholder="+977..." />
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Event or order type</span>
                <select name="eventType" value={formData.eventType} onChange={handleChange} className={fieldClass}>
                  {["Wedding", "Birthday", "Hiking event", "Hotel or cafe", "Office supply", "Retail shop", "Jaruwa packaging", "Other"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Delivery area</span>
                <select name="location" value={formData.location} onChange={handleChange} className={fieldClass}>
                  {deliveryAreas.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Bottle size</span>
                <select name="bottleSize" value={formData.bottleSize} onChange={handleChange} className={fieldClass}>
                  {["500ml", "900ml", "1L", "20L", "Jaruwa packaging"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Quantity</span>
                <input name="quantity" type="number" min="1" value={formData.quantity} onChange={handleChange} required className={fieldClass} placeholder="Example: 240" />
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-[#0a2540]">Wrapper need</span>
                <select name="wrapperNeed" value={formData.wrapperNeed} onChange={handleChange} className={fieldClass}>
                  {["Need custom wrapper design", "I have my own design", "Standard Bhedetar label", "Need help choosing"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-[#0a2540]">Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`${fieldClass} resize-none`} placeholder="Date, location, wrapper idea, delivery note..." />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full bg-[#0a2540] py-3 font-bold text-white transition hover:bg-[#0e6ba8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Saving inquiry…" : "Save Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}