"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Mechanic } from "../data/mechanics";

export default function BookingModal({ mechanic, onClose, onConfirm }: { mechanic: Mechanic; onClose: () => void; onConfirm: (note?: string) => Promise<void> | void }) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm(note);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center modal-scroll-fix">
      <div onClick={onClose} className="absolute inset-0 bg-black/40"></div>
      <motion.div
        initial={{ y: 220, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative bg-white rounded-t-3xl md:rounded-2xl w-full md:w-2/5 p-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Book {mechanic.name}</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          <div>Estimated arrival <strong>~15 min</strong></div>
          <div>Service: <strong>{mechanic.services[0]}</strong></div>
          <div>Price: <strong>PKR {mechanic.priceFrom}</strong></div>

          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Any note for mechanic (e.g., location details)" className="w-full border rounded-md p-2 text-sm" />

          <button onClick={handleConfirm} disabled={loading} className="w-full bg-accent text-white py-3 rounded-xl font-semibold">
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
          <button onClick={onClose} className="w-full border border-gray-200 py-3 rounded-xl">Cancel</button>
        </div>
      </motion.div>
    </div>
  );
}
