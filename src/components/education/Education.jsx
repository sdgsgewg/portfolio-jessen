import { useState } from "react";
import EduCard from "./EduCard";

const educationEntry = [
  {
    id: "ed0",
    institutionName: "Bina Nusantara University",
    degreeObtained: "Bachelor's Degree in Web Development",
    yearsAttended: "2022 - Present",
    description:
      "Gained skills in full-stack development, project collaboration, and problem-solving.",
  },
  {
    id: "ed1",
    institutionName: "Immanuel Bilingual Class",
    degreeObtained: "Senior High School Education",
    yearsAttended: "2019 - 2022",
    description:
      "Focused on advanced studies in natural science, engaged inextracurricular activities, and developed teamwork skills through group projects.",
  },
  {
    id: "ed2",
    institutionName: "Immanuel Bilingual Class",
    degreeObtained: "Junior High School Education",
    yearsAttended: "2016 - 2019",
    description:
      "Enhanced critical thinking skills and participated in various clubs and activities.",
  },
  {
    id: "ed3",
    institutionName: "Immanuel Bilingual Class",
    degreeObtained: "Primary School Education",
    yearsAttended: "2010 - 2016",
    description:
      "Built a strong foundation in core subjects and developed a love for learning.",
  },
];

export default function Education() {
  const [educations, setEducations] = useState(educationEntry);

  return (
    <section id="education" className="pt-36 pb-32 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="font-semibold text-lg text-primary">Education</h4>
          <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
            Collaborators in My Journey
          </h2>
          <p className="font-medium text-md text-secondary md:text-lg">
            Throughout my academic journey, Ive had the privilege of working
            alongside talented individuals and teams, enriching my learning
            experience and expanding my horizons.
          </p>
        </div>

        <div className="slide-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu) => (
            <EduCard key={edu.id} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
