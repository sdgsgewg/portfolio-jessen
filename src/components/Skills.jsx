export default function Skills() {
  return (
    <section id="skills" className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Skills</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              My Skills
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Below, you’ll find an overview of my technical proficiencies and
              interpersonal strengths, which together make me a versatile and
              reliable developer.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="slide-left w-full px-4 mb-10 lg:w-1/2">
            <h2 className="font-bold text-white text-3xl mb-5 max-w-md lg:text-4xl">
              Technical Skills
            </h2>
            <p className="font-medium text-base text-slate-400 max-w-xl lg:text-lg">
              Proficient in a wide range of web development technologies and
              tools, including HTML, CSS, JavaScript, Java, PHP, C, C#, Python,
              Typescript, and SQL. Experienced with frameworks and tools like
              Laravel, React, MySQL, GitHub, and Figma. Skilled in Version
              Control, Responsive Design, API Integration, CRUD Operations, and
              Problem-Solving.
            </p>
          </div>
          <div className="slide-right w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-white text-2xl mb-4 lg:text-3xl">
              Soft Skills
            </h3>
            <p className="font-medium text-base text-slate-400 mb-6 lg:text-lg">
              A strong collaborator with excellent Communication skills, capable
              of managing projects effectively through Time Management and
              meticulous Attention to Detail. Recognized for my ability to work
              well in teams and adapt to new challenges in fast-paced
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
