"use client";
import React, { useState } from "react";

export default function BookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address }),
      });
      const data = await res.json();
      if (res.ok) setSuccess(true);
      else setError(data.error || "Something went wrong");
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  if (success) return <div className="max-w-xl mx-auto bg-white p-6 rounded-3xl card-glow text-center">Booking confirmed! Our mechanic will contact you shortly.</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-3xl card-glow">
      <h3 className="text-xl font-bold mb-3">Confirm Booking</h3>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="grid gap-3">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-3 border rounded-md" />
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="p-3 border rounded-md" />
        <input required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Pickup / Location details" className="p-3 border rounded-md" />
        <button disabled={loading} className="bg-accent text-white py-3 rounded-xl">{loading ? "Booking..." : "Confirm"}</button>
      </div>
    </form>
  );
}
