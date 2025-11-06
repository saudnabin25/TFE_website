import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.js";

export default function BlogPost(){
  const { id } = useParams();
  const post = posts.find(p => String(p.id) === id);

  if (!post) {
    return (
      <section className="container-max py-20 text-center">
        <h1 className="text-3xl font-bold text-brand">Blog not found</h1>
        <p className="mt-4 text-gray-600">The post you are looking for might have been moved or removed.</p>
        <Link to="/blogs" className="btn btn-blue mt-6 inline-flex items-center gap-2">
          Back to Blogs <span aria-hidden>→</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="bg-gray-50">
      <header className="container-max py-16 space-y-4">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-[#2563eb] transition">
          ← All Blogs
        </Link>
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
          </div>
          <h1 className="text-4xl font-extrabold text-brand leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-500">
              {post.author ? post.author.split(" ").map(n => n[0]).join("").slice(0,2) : "TFE"}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">{post.author || "Trinket For Education"}</div>
              <div className="text-xs text-gray-500">Contributor</div>
            </div>
          </div>
        </div>
      </header>

      {post.image && (
        <div className="w-full bg-black">
          <img src={post.image} alt={post.title} className="w-full max-h-[480px] object-cover" />
        </div>
      )}

      <section className="container-max py-12">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          {(post.content || ["This story explores how communities are reimagining education through technology, mentorship, and local leadership."]).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>
    </article>
  );
}
