import React from "react";

export default function ProjectCard({project}){
  const pct = Math.min(100, Math.round((project.raised / project.goal) * 100));
  const barColor = project.completed ? "bg-green-500" : "bg-blue-500";
  const topColor = project.topColor || "bg-slate-800";
  const cta = project.completed ? "Project Completed" : "Donate Now";
  const ctaClass = project.completed ? "btn bg-green-600 text-white" : "btn-primary";

  return (
    <div className="card overflow-hidden">
      <div className={`${topColor} text-white h-40 flex items-center justify-center text-lg font-semibold`}>
        {project.banner}
      </div>
      <div className="p-6">
        <div className="text-brand font-extrabold">{project.title}</div>
        <p className="text-gray-600 mt-2">{project.description}</p>

        <div className="flex items-center justify-between mt-4 text-sm font-semibold text-blue-700">
          <span>Raised: ${project.raised.toLocaleString()}</span>
          <span className="text-gray-500">Goal: ${project.goal.toLocaleString()}</span>
        </div>
        <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className={`${barColor} h-full`} style={{width: pct + "%"}}></div>
        </div>
        <div className="mt-2 text-center text-sm font-semibold text-gray-700">{pct}% Funded</div>

        <button className={`${ctaClass} w-full mt-4`}>{cta}</button>
      </div>
    </div>
  )
}
