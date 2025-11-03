import React from "react";
import { Link } from "react-router-dom";

const links = [
  { hash: "#projects", label: "Projects" },
  { hash: "#about", label: "About Us" },
  { hash: "#events", label: "Events" },
  { hash: "#fundraising", label: "Fundraising" },
  { hash: "#blogs", label: "Blogs" },
  { hash: "#contact", label: "Contact Us" },
];

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <div className="container-max py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-lg">Logo</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.label} href={l.hash} className="text-sm text-white/90 hover:text-white">{l.label}</a>
          ))}
        </nav>
        <Link to="/" className="btn bg-white text-brand font-bold">Donate</Link>
      </div>
    </header>
  )
}
