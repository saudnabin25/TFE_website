import React from "react";
import posts from "../data/posts.js";

export default function BlogSection(){
  const [featured, ...rest] = posts;
  return (
    <section id="blogs" className="bg-brand text-white py-16">
      <div className="container-max grid md:grid-cols-2 gap-8">
        <div className="card bg-brand/20 border-white/10 p-6">
          <div className="text-sm text-white/70">{featured.date}</div>
          <h3 className="text-2xl font-extrabold mt-2">{featured.title}</h3>
          <p className="text-white/80 mt-2">{featured.excerpt}</p>
        </div>
        <div className="space-y-6">
          {rest.map(p => (
            <div key={p.id} className="border-t border-white/10 pt-4">
              <div className="text-sm text-white/70">{p.date}</div>
              <div className="font-bold">{p.title}</div>
              <p className="text-white/80 text-sm">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
