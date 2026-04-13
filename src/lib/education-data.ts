import { v4 as uuidv4 } from "uuid";

export type Education = {
  id: string;
  institutionName: string;
  degreeObtained: string;
  yearsAttended: string;
  description: string;
  gpa?: number;
};

export const EDUCATION_ENTRIES: Record<"en" | "id", Education[]> = {
  en: [
    {
      id: "edu-4",
      institutionName: "Bina Nusantara University",
      degreeObtained: "Bachelor's Degree in Web Development",
      yearsAttended: "2022 - Present",
      description:
        "Gained skills in full-stack development, project collaboration, and problem-solving.",
      gpa: 3.88,
    },
    {
      id: "edu-3",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Senior High School Education",
      yearsAttended: "2019 - 2022",
      description:
        "Focused on advanced studies in natural science, engaged inextracurricular activities, and developed teamwork skills through group projects.",
    },
    {
      id: "edu-2",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Junior High School Education",
      yearsAttended: "2016 - 2019",
      description:
        "Enhanced critical thinking skills and participated in various clubs and activities.",
    },
    {
      id: "edu-1",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Primary School Education",
      yearsAttended: "2010 - 2016",
      description:
        "Built a strong foundation in core subjects and developed a love for learning.",
    },
  ],
  id: [
    {
      id: "edu-4",
      institutionName: "Bina Nusantara University",
      degreeObtained: "Bachelor's Degree in Web Development",
      yearsAttended: "2022 - Present",
      description:
        "Gained skills in full-stack development, project collaboration, and problem-solving.",
      gpa: 3.88,
    },
    {
      id: "edu-3",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Senior High School Education",
      yearsAttended: "2019 - 2022",
      description:
        "Focused on advanced studies in natural science, engaged inextracurricular activities, and developed teamwork skills through group projects.",
    },
    {
      id: "edu-2",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Junior High School Education",
      yearsAttended: "2016 - 2019",
      description:
        "Enhanced critical thinking skills and participated in various clubs and activities.",
    },
    {
      id: "edu-1",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Primary School Education",
      yearsAttended: "2010 - 2016",
      description:
        "Built a strong foundation in core subjects and developed a love for learning.",
    },
  ],
};
