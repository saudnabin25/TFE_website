import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About Us", to: "/about" },
  { label: "Events", href: "#events" },
  { label: "Students", to: "/students" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar(){
  return (
    <header className="sticky top-0 w-full z-50 bg-white text-brand shadow-md">
      <div className="px-5 md:px-10 py-5 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/Pictures/logo.png" alt="Trinket For Education logo" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 text-lg flex-1 justify-center">
          {links.map(link => {
            if (link.to) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="inline-flex items-center font-semibold text-brand hover:text-[#2563eb] transition"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center font-semibold text-brand hover:text-[#2563eb] transition"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <Link
          to="/"
          className="ml-auto btn btn-blue font-bold text-base px-5 py-2.5 rounded-full"
        >
          Donate Us
        </Link>
      </div>
    </header>
  )
}
