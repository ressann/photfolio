import React from "react";
import { TabsContent } from "../ui/tabs";
import { skillCategoriesProgramming } from "@/lib/data";

function ProgramingSkills() {
  return (
    <TabsContent value="programming">
      <div className="space-y-5 py-5">
        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A comprehensive overview of my technical skills and expertise. I'm
            constantly learning and expanding my toolkit to stay current with
            industry trends and best practices.
          </p>
        </section>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategoriesProgramming.map((category) => (
            <section key={category.title} className="space-y-8">
              <h2 className="text-2xl font-light text-foreground">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Info */}
        <section className="space-y-6 pt-8 border-t border-border">
          <h3 className="text-xl font-light text-foreground">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Rust", "GraphQL", "Three.js", "Web3", "AI/ML"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </TabsContent>
  );
}

export default ProgramingSkills;
