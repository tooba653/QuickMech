'use client'
import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }){
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-2">
      <Search size={18} className="text-gray-500 mr-2" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search mechanics or services..."
        className="bg-transparent outline-none w-full text-sm"
      />
      <div className="text-xs text-gray-400">Nearby</div>
    </div>
  )
}
