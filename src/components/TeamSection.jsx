import React from "react";
import { Link } from "react-router-dom";
import team from "../data/team.js";

const filters = ["All","Marketing Team","CTO","Business Analytics","Product Development"];

export default function TeamSection(){
  return (
    <section className="container-max py-16" id="team">
      <h2 className="section-title text-center">Meet Our Team</h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {filters.map(f => (
          <button key={f} className={`px-4 py-2 rounded-full border bg-white text-sm hover:bg-gray-100`}>{f}</button>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.slice(0,4).map(m => (
          <Link key={m.id} to={`/team/${m.id}`} className="card p-4 flex flex-col items-center hover:shadow-lg">
            <img src={m.photo} alt={m.name} className="w-28 h-28 rounded-full object-cover shadow-md" />
            <div className="mt-3 font-semibold">{m.name}</div>
            <div className="text-xs text-gray-600">{m.title}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
