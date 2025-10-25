import React from "react";
import { TabsContent } from "../ui/tabs";
import Link from "next/link";
import { projectsProgramming } from "@/lib/data";
import ProjectCard from "./project-card";

function ProgrammingProjects() {
  return (
    <TabsContent value="programming">
      <div className="py-5 space-y-5">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A selection of projects I&apos;ve worked on. Each project represents a
            unique challenge and an opportunity to learn and grow as a
            developer.
          </p>
        </section>

        <div className="space-y-12">
          {projectsProgramming.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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
