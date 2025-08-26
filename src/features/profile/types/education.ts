import type { ExperiencePositionIcon } from "./experiences";

export interface Education {
  id: string;
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  period: {
    start: string;
    end?: string;
  };
  logo?: string;
  website?: string;
  description?: string;
  skills?: string[];
  theme?: boolean;
  isExpanded?: boolean;
  icon?: ExperiencePositionIcon;
}
