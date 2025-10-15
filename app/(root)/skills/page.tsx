import PageContainer from "@/components/shared/page-container";
import NetworkingSkills from "@/components/skills/networking-skills";
import ProgramingSkills from "@/components/skills/programming-skills";
import React from "react";

function Skills() {
  return (
    <div>
      <PageContainer title="Skills">
        <NetworkingSkills />
        <ProgramingSkills />
      </PageContainer>
    </div>
  );
}

export default Skills;
