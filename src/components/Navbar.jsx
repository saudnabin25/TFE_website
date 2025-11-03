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
    <header className="sticky top-0 z-50 bg-[#2b2c72] text-white shadow-md">
      <div className="container-max py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Trinket For Education logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 text-base">
          {links.map(link => {
            if (link.to) {
              return (
                <Link key={link.label} to={link.to} className="text-white/90 hover:text-white">
                  {link.label}
                </Link>
              );
            }
            return (
              <a key={link.label} href={link.href} className="text-white/90 hover:text-white">
                {link.label}
              </a>
            );
          })}
        </nav>
        <Link to="/" className="btn bg-white text-brand font-bold text-base px-5 py-2.5">Donate</Link>
      </div>
    </header>
  )
}
