import NetworkingProjects from "@/components/projects/networking-projects";
import ProgrammingProjects from "@/components/projects/programming-projects";
import PageContainer from "@/components/shared/page-container";
import React from "react";

function Projects() {
  return (
    <div>
      <PageContainer title="Projects">
        <ProgrammingProjects />
        <NetworkingProjects />
      </PageContainer>
    </div>
  );
}

export default Projects;
