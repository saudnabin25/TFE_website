import React from "react";

const socials = [
  { label: "Facebook", symbol: "f", href: "#" },
  { label: "Instagram", symbol: "ig", href: "#" },
  { label: "LinkedIn", symbol: "in", href: "#" },
  { label: "X", symbol: "x", href: "#" },
];

const aboutLinks = [
  "Organization",
  "What we do",
  "Contact Us",
  "Support",
  "Privacy Policy",
  "Terms and Conditions",
];

const articleLinks = ["Blogs", "Publications", "Events", "Careers"];
const teamLinks = ["Advisory Board", "Founders", "Researchers"];

export default function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-max py-12 text-gray-700">
        <div className="grid gap-10 md:grid-cols-4 text-sm">
          <div>
            <div className="uppercase text-xs tracking-widest text-gray-500 font-semibold">
              Follow Us
            </div>
            <div className="flex items-center gap-3 mt-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-xs font-semibold uppercase text-gray-600 hover:text-brand hover:border-brand transition"
                >
                  {s.symbol}
                </a>
              ))}
            </div>
            <ul className="space-y-3 mt-6 text-gray-600">
              <li>
                <span className="font-semibold">Email:</span> info@trinketforeducation.org
              </li>
              <li>
                <span className="font-semibold">Phone:</span> 571-338-0048
              </li>
              <li>
                <span className="font-semibold">Address:</span><br />
                5024 Sunridge Palms Dr<br />
                Tampa, FL 33617 (Apt 101)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">About</h4>
            <ul className="mt-4 space-y-2">
              {aboutLinks.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-brand transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Articles</h4>
            <ul className="mt-4 space-y-2">
              {articleLinks.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-brand transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Our team</h4>
            <ul className="mt-4 space-y-2">
              {teamLinks.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-brand transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-max py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-gray-500">
          <div>© {year}. All rights reserved Trinket For Education</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
