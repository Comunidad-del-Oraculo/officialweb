"use client";
import { links } from "@/lib/constants";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-accent">
            Oráculo
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={`/#${link.url}`}
                className="text-gray-700 hover:text-accent cursor-pointer font-medium scroll-smooth transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
