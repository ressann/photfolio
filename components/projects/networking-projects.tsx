import React from "react";
import { TabsContent } from "../ui/tabs";
import Link from "next/link";
import { networkingProjects } from "@/lib/data";
import ProjectCard from "./project-card";

function NetworkingProjects() {
  return (
    <TabsContent value="networking">
      <div className="py-5 space-y-5">
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A showcase of networking infrastructure projects, from enterprise
            network design to cloud connectivity and security implementations.
          </p>
        </section>

        <div className="space-y-12">
          {networkingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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
