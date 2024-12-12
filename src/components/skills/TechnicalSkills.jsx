import TechIcons from "./TechIcons";

export default function TechnicalSkills() {
  return (
    <div className="slide-left w-full px-4 mb-10 lg:w-1/2">
      <h3 className="font-bold text-white text-2xl mb-5 max-w-md lg:text-4xl">
        Technical Skills
      </h3>
      <p className="font-medium text-base text-slate-400 max-w-xl lg:text-lg">
        Proficient in a wide range of web development technologies and tools,
        including HTML, CSS, JavaScript, TypeScript, PHP, Java, C#, C, Python.
        Experienced with frameworks and libraries such as React, Laravel,
        Bootstrap, and Tailwind CSS, as well as tools like MySQL, SQL, GitHub,
        and Figma. Skilled in version control, responsive design, API
        integration, CRUD operations, database management, and problem-solving.
      </p>
      <div className="relative w-full h-auto overflow-hidden mt-6">
        <div className="skills-content flex gap-6">
          <TechIcons />
          <TechIcons />
        </div>
      </div>
    </div>
  );
}
