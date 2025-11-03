import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.js";

export default function BlogSection(){
  const [featured, ...rest] = posts;
  return (
    <section id="blogs" className="bg-brand text-white py-16">
      <div className="container-max grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
        <div className="card bg-white text-brand shadow-lg p-6 md:p-8">
          {featured.image && (
            <img src={featured.image} alt={featured.title} className="w-full h-48 object-cover rounded-2xl mb-6" />
          )}
          <div className="text-xs uppercase tracking-widest text-gray-500">{featured.category}</div>
          <div className="text-sm text-gray-500 mt-1">{featured.date}{featured.readTime ? ` · ${featured.readTime}` : ""}</div>
          <h3 className="text-2xl font-extrabold mt-3 text-brand">{featured.title}</h3>
          {featured.excerpt && (
            <p className="text-gray-600 mt-4 leading-relaxed">{featured.excerpt}</p>
          )}
          {featured.content && featured.content.length > 0 && (
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
              {featured.content.slice(0,2).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
          <Link to={`/blogs`} className="btn btn-blue mt-6 w-fit">Read More</Link>
        </div>
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-[#C7D2FE] uppercase tracking-wide">Recent Articles</h4>
          {rest.map(p => (
            <div key={p.id} className="border-t border-white/10 pt-4">
              <div className="text-xs text-white/60 uppercase tracking-wide">{p.category}</div>
              <div className="text-sm text-white/70">{p.date}{p.readTime ? ` · ${p.readTime}` : ""}</div>
              <div className="font-bold mt-1">{p.title}</div>
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
