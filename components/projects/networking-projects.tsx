import React from "react";
import { TabsContent } from "../ui/tabs";
import Link from "next/link";
import { networkingProjects } from "@/lib/data";

function NetworkingProjects() {
  return (
    <TabsContent value="networking">
      <div className="py-5 space-y-5">
        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A showcase of networking infrastructure projects, from enterprise
            network design to cloud connectivity and security implementations.
          </p>
        </section>

        {/* Projects List */}
        <div className="space-y-12">
          {networkingProjects.map((project, index) => (
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
                View Details
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
            These networking projects demonstrate expertise in infrastructure
            design, security implementation, and cloud connectivity. For more
            technical details, feel free to{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              get in touch
            </Link>
            .
          </p>
        </section>
      </div>
    </TabsContent>
  );
}

export default NetworkingProjects;
