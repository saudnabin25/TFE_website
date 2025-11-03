import React from "react";
import { useParams, Link } from "react-router-dom";
import team from "../data/team.js";

export default function TeamMember(){
  const { id } = useParams();
  const m = team.find(t => String(t.id) === id) || team[0];
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filteredTeam = activeFilter === "All" ? team : team.filter(member => member.category === activeFilter);

  return (
    <section className="container-max py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start card p-6 bg-white">
        <div className="flex items-center gap-6">
          <img src={m.photo} alt={m.name} className="w-28 h-28 rounded-full object-cover shadow" />
          <div>
            <h1 className="text-3xl font-extrabold">{m.name}</h1>
            <div className="text-blue-600 font-semibold">{m.title.toUpperCase()}</div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">About {m.name.split(' ')[0]}</h2>
          <p className="text-gray-700 mt-2">{m.about}</p>
          <div className="mt-4 pt-4 border-t">
            <div><span className="font-semibold">Email:</span> {m.email}</div>
            <div><span className="font-semibold">Role:</span> {m.title}</div>
            <div><span className="font-semibold">Category:</span> {m.category}</div>
          </div>
        </div>
      </div>

      <h3 className="section-title text-center mt-12">Meet The Team</h3>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["All","Executive","Researchers","Advisors","Volunteers","Mentors"].map(f => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full border ${activeFilter === f ? "bg-brand text-white border-brand" : "bg-white hover:bg-gray-100"}`}
            onClick={() => setActiveFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredTeam.map(member => (
          <Link key={member.id} to={`/team/${member.id}`} className="card p-4 flex flex-col items-center">
            <img src={member.photo} className="w-24 h-24 rounded-full object-cover" />
            <div className="mt-2 font-semibold">{member.name}</div>
            <div className="text-xs text-gray-600">{member.title}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
