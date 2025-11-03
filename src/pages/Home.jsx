import React from "react";
import ProjectsSection from "../components/ProjectsSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import BlogSection from "../components/BlogSection.jsx";

export default function Home(){
  return (
    <>
      <section
        className="relative h-[70vh] min-h-[480px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-brand/70"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-cover bg-bottom" style={{ backgroundImage: "url('/hero-brush.png')" }}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">A Trinket For Education</h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">An individual thought or deed is all it takes to set everything in motion.</p>
          <button className="btn-hero mt-6">Donate a Trinket</button>
        </div>
      </section>
      <ProjectsSection />
      <TeamSection />
      <BlogSection />
    </>
  )
}
