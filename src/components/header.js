"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // or use your preferred icon lib
import { usePathname } from 'next/navigation';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="w-full bg-white shadow py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
            href="/"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              pathname === "/" ? "text-blue-600 underline" : "text-black"
            }`}
          >
        <div className="flex items-center">
          <Image
            src="/crestallogo.png"
            alt="Logo"
            width={120}
            height={40}
          />
        </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#"
            className="text-black text-sm font-medium hover:underline underline-offset-4"
          >
            Listeners & Creators
          </Link>
          <Link
            href="/artists"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              pathname === "/artists" ? "text-blue-600 underline" : "text-black"
            }`}
          >
            Artists
          </Link>
          <Link href="/join">
          <button className="bg-black text-white rounded-full px-10 py-2 text-sm font-semibold hover:opacity-90 transition">
            Join beta
          </button>
          </Link>
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-4">
          <Link
            href="#"
            className="text-black text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            Listeners & Creators
          </Link>
          <Link
            href="#"
            className="text-black text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            Artists
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white rounded-full px-10 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Join beta
          </button>
        </div>
      )}
    </header>
  );
}
