import React from "react";
import ProjectsSection from "../components/ProjectsSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import BlogSection from "../components/BlogSection.jsx";

export default function Home(){
  return (
    <>
      <section className="h-16"></section>
      <ProjectsSection />
      <TeamSection />
      <BlogSection />
    </>
  )
}
