import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.js";

export default function BlogSection(){
  const [featured, ...rest] = posts;
  return (
    <section id="blogs" className="bg-brand text-white py-16">
      <div className="container-max grid md:grid-cols-2 gap-8">
        <div className="card bg-brand/20 border-white/10 p-6">
          <div className="text-sm text-white/70">{featured.date}</div>
          <h3 className="text-2xl font-extrabold mt-2">{featured.title}</h3>
          {featured.excerpt && (
            <p className="text-white/80 mt-4 italic">{featured.excerpt}</p>
          )}
          {featured.content && (
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
              {featured.content.map((paragraph, idx) => (
                <p key={idx} className="text-base">{paragraph}</p>
              ))}
            </div>
          )}
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
      <div className="container-max mt-10">
        <Link to="/blogs" className="btn bg-white text-brand font-semibold">View All Posts</Link>
      </div>
    </section>
  )
}
