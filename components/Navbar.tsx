"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Book", href: "/book" },
    { name: "QuickMech", href:"quick-mech" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-accent">
          QuickMech
        </Link>

    
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 font-semibold hover:text-accent transition">
              {link.name}
            </Link>
          ))}
        </div>

    
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-gray-700 font-semibold hover:text-accent transition">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
