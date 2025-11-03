import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function ProjectsSection(){
  return (
    <section id="projects" className="container-max py-16">
      <div className="text-center">
        <div className="section-sub">OUR IMPACT</div>
        <h2 className="section-title mt-2">Projects That Need Your Support</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="text-center mt-8">
        <a href="#" className="btn-secondary">View All Projects</a>
      </div>
    </section>
  )
}
