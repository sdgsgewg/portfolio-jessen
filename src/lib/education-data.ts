import { Education } from "@/types/education";

export const EDUCATION_ENTRIES: Record<"en" | "id", Education[]> = {
  en: [
    {
      id: "edu-4",
      institutionName: "Bina Nusantara University",
      degreeObtained: "Bachelor's Degree in Computer Science",
      yearsAttended: "2022 - 2026",
      description:
        "Gained skills in full-stack development, project collaboration, and problem-solving.",
      gpa: 3.86,
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
      degreeObtained: "Sarjana Ilmu Komputer",
      yearsAttended: "2022 - 2026",
      description:
        "Mengembangkan keterampilan dalam pengembangan full-stack, kolaborasi dalam proyek, dan pemecahan masalah.",
      gpa: 3.86,
    },
    {
      id: "edu-3",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Pendidikan Sekolah Menengah Atas",
      yearsAttended: "2019 - 2022",
      description:
        "Berfokus pada pembelajaran ilmu pengetahuan alam tingkat lanjut, aktif dalam kegiatan ekstrakurikuler, serta mengembangkan kemampuan kerja sama melalui proyek kelompok.",
    },
    {
      id: "edu-2",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Pendidikan Sekolah Menengah Pertama",
      yearsAttended: "2016 - 2019",
      description:
        "Mengembangkan kemampuan berpikir kritis serta berpartisipasi dalam berbagai klub dan kegiatan.",
    },
    {
      id: "edu-1",
      institutionName: "Immanuel Bilingual Class",
      degreeObtained: "Pendidikan Sekolah Dasar",
      yearsAttended: "2010 - 2016",
      description:
        "Membangun dasar yang kuat dalam berbagai mata pelajaran inti serta mengembangkan minat untuk terus belajar.",
    },
  ],
};
