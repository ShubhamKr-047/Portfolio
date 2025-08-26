export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "idea";

export interface ExperiencePosition {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements: string[];
  skills?: string[];
  employmentPeriod: {
    start: string;
    end?: string;
  };
  icon?: ExperiencePositionIcon;
}

export interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  positions: ExperiencePosition[];
}
