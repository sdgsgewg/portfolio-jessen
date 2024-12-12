import TechnicalSkills from "./skills/TechnicalSkills";
import SoftSkills from "./skills/SoftSkills";

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

        <div className="w-full flex flex-wrap">
          <TechnicalSkills />
          <SoftSkills />
        </div>
      </div>
    </section>
  );
}
