"use client";

import React from "react";
import type { Mechanic } from "../data/mechanics";

export default function MechanicCard({ mechanic, onBook }: { mechanic: Mechanic; onBook: () => void }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <img src={mechanic.img} alt={mechanic.name} className="w-full h-40 object-cover rounded-xl mb-3" />
      <h3 className="text-xl font-bold">{mechanic.name}</h3>
      <p className="text-gray-500">{mechanic.services[0]}</p>
      <p className="text-gray-700 font-semibold">PKR {mechanic.priceFrom}</p>
      <button onClick={onBook} className="mt-3 w-full bg-accent text-white py-2 rounded-xl font-semibold hover:bg-accent-dark transition">
        Book Now
      </button>
    </div>
  );
}
