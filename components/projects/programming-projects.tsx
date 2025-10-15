import React from "react";
import { TabsContent } from "../ui/tabs";
import Link from "next/link";
import { projectsProgramming } from "@/lib/data";

function ProgrammingProjects() {
  return (
    <TabsContent value="programming">
      <div className="py-5 space-y-5">
        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A selection of projects I've worked on. Each project represents a
            unique challenge and an opportunity to learn and grow as a
            developer.
          </p>
        </section>

        {/* Projects List */}
        <div className="space-y-12">
          {projectsProgramming.map((project, index) => (
            <article
              key={index}
              className="group space-y-4 pb-12 border-b border-border last:border-0"
            >
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
          ))}
        </div>

        {/* Footer Note */}
        <section className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            These are just a few highlights from my portfolio. For more projects
            and code samples, check out my{" "}
            <Link
              href="/github"
              className="text-primary hover:underline underline-offset-4"
            >
              GitHub profile
            </Link>
            .
          </p>
        </section>
      </div>
    </TabsContent>
  );
}

export default ProgrammingProjects;
