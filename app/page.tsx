'use client'

import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MechanicCard from '../components/MechanicCard'
import BookingModal from '../components/BookingModal'
import { mechanics, Mechanic } from '../data/mechanics'

export default function HomePage() {
  const [selectedMechanic, setSelectedMechanic] = useState<Mechanic | null>(null)
  const handleConfirm = async (note?: string) => {
    if (!selectedMechanic) return;

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Guest',
          phone: '1234567890',
          address: note,
          mechanic: selectedMechanic.name,
        }),
      })

      const data = await res.json()
      alert(data.message || 'Booking confirmed!')
      setSelectedMechanic(null)
    } catch (err) {
      console.error(err)
      alert('Booking failed')
    }
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <section id="mechanics" className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6 mt-8">
        {mechanics.map((m) => (
          
          <MechanicCard key={m.id} mechanic={m} onBook={() => setSelectedMechanic(m)} />
        ))}
      </section>

      
      {selectedMechanic && (
        <BookingModal
          mechanic={selectedMechanic}
          onClose={() => setSelectedMechanic(null)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}
