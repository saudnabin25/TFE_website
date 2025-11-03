import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Students", to: "/students" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white text-brand shadow-md">
      <div className="w-full px-5 md:px-10 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="Trinket For Education logo" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-10 text-lg flex-1 justify-center">
          {links.map(link => {
            if (link.to) {
              return (
                <Link key={link.label} to={link.to} className="text-[#1F2544] hover:text-[#2563eb] font-semibold">
                  {link.label}
                </Link>
              );
            }
            return (
              <a key={link.label} href={link.href} className="text-[#1F2544] hover:text-[#2563eb] font-semibold">
                {link.label}
              </a>
            );
          })}
        </nav>
        <Link to="/" className="btn btn-blue font-bold text-base px-5 py-2.5 ml-auto">
          Donate Us
        </Link>
      </div>
    </header>
  )
}
