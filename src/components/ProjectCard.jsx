import React from "react";

export default function ProjectCard({project}){
  const pct = Math.min(100, Math.round((project.raised / project.goal) * 100));
  const barColor = project.completed ? "bg-green-500" : "bg-blue-500";
  const topColor = project.topColor || "bg-slate-800";
  const hasImage = project.banner && project.banner.startsWith("/");
  const cta = project.completed ? "Project Completed" : "Donate Now";
  const ctaClass = project.completed ? "btn bg-green-600 text-white" : "btn-primary";

  return (
    <div className="card overflow-hidden h-full flex flex-col">
      {hasImage ? (
        <div className="w-full aspect-[4/3] bg-white flex items-center justify-center p-4">
          <div className="w-full h-full rounded-2xl border border-brand/20 bg-white flex items-center justify-center overflow-hidden">
            <img src={project.banner} alt={project.title} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      ) : (
        <div className={`${topColor} text-white h-40 flex items-center justify-center text-lg font-semibold`}>
          {project.banner}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-brand font-extrabold text-lg">{project.title}</div>
        <p className="text-gray-600 text-sm mt-3 whitespace-pre-line leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm font-semibold text-blue-700">
            <span>Raised: ${project.raised.toLocaleString()}</span>
            <span className="text-gray-500">Goal: ${project.goal.toLocaleString()}</span>
          </div>
          <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className={`${barColor} h-full`} style={{width: pct + "%"}}></div>
          </div>
          <div className="mt-2 text-center text-sm font-semibold text-gray-700">{pct}% Funded</div>
        </div>

        <button className={`${ctaClass} w-full mt-6`}>{cta}</button>
      </div>
    </div>
  )
}
