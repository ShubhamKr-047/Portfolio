import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "sample-company",
    companyName: "Sample Company",
    companyLogo: "/icons/company.svg",
    positions: [
      {
        id: "sample-position",
        title: "Sample Position",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        description: "A sample position for demonstration purposes.",
        achievements: ["Sample achievement 1", "Sample achievement 2"],
        skills: ["JavaScript", "React", "Node.js"],
        employmentPeriod: {
          start: "2025-01-01",
          end: "2025-12-31",
        },
      },
    ],
  },
];
