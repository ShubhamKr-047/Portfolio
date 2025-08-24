import React from "react";

import { EXPERIENCES } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  // Filter to only show education
  const educationExperience = EXPERIENCES.find((exp) => exp.id === "education");

  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {educationExperience && (
          <ExperienceItem
            key={educationExperience.id}
            experience={educationExperience}
          />
        )}
      </div>
    </Panel>
  );
}
