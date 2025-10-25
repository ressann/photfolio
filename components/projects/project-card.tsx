"use client";

import Link from "next/link";

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    year: string;
    technologies: string[];
    link: string;
  };
}) {
  return (
    <article className="group space-y-4 pb-12 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            <span className="text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={project.link}
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
      >
        View Project
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </article>
  );
}

export default ProjectCard;
