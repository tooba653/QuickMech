"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src="/hero.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/40">
        <h1 className="text-5xl font-bold mb-4">Quick Mech</h1>
        <p className="text-lg mb-6">Find the best mechanics near you!</p>
        <a href="#mechanics" className="bg-accent px-6 py-3 rounded-xl font-semibold text-white hover:bg-accent-dark transition">
          Explore Mechanics
        </a>
      </div>
    </div>
  );
};

export default Hero;
