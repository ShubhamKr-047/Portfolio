export interface ExperiencePosition {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
}

export interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  positions: ExperiencePosition[];
}
