import useReadMoreToggle from "../../hooks/useReadMoreToggle";
import { FaCalendarAlt, FaGithub, FaFileAlt } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPublic } from "react-icons/md";

export default function PortfolioCard({ p }) {
  const toggleText = useReadMoreToggle();

  return (
    <div className={`${p.slide} mb-12 p-4 md:w-1/2`}>
      <div
        className="rounded-md shadow-md flex justify-center overflow-hidden"
        style={{ width: "100%", height: "260px" }}
      >
        <img
          src={p.image}
          alt={p.slug}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{p.name}</h3>
      <div className="flex gap-2 mb-4">
        {p.techStack.map((tech) => (
          <span
            className={`
            ${
              tech === "React"
                ? "bg-sky-500"
                : tech === "Laravel"
                ? "bg-red-600"
                : tech === "JS"
                ? "bg-yellow-400"
                : tech === "TypeScript"
                ? "bg-blue-600"
                : tech === "Tailwind CSS"
                ? "bg-cyan-400"
                : tech === "Bootstrap"
                ? "bg-indigo-600"
                : tech === "CSS"
                ? "bg-blue-500"
                : tech === "HTML"
                ? "bg-orange-600"
                : tech === "Python"
                ? "bg-blue-700"
                : "bg-gray-200 text-black"
            }
            ${tech === "JS" ? "text-black" : "text-white"}
            rounded-2xl shadow-sm px-4 py-[0.1rem]
          `}
            key={p.id}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center font-semibold text-base text-secondary gap-2 mb-3">
        <FaCalendarAlt />
        <h4>{p.date}</h4>
      </div>
      <p className="font-medium text-base text-secondary text-justify">
        {p.excerpt}
        <span className="moreText" data-id={p.id} style={{ display: "none" }}>
          {p.moreText}
        </span>
      </p>
      <button
        onClick={() => toggleText(p.id)}
        className="toggleButton text-blue-500 font-semibold mt-2 mb-6"
        data-id={p.id}
      >
        Read More
      </button>
      <div className="flex gap-3">
        {!p.isDeployed ? (
          <a
            href={p.ghLink}
            target="_blank"
            className="flex items-center gap-2 text-base font-semibold text-white bg-slate-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            <FaGithub />
            View Github
          </a>
        ) : (
          <>
            <a
              href={p.type === "ai-model" ? p.paperLink : p.ghLink}
              target="_blank"
              className="flex items-center gap-2 text-base font-semibold text-white bg-slate-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              {p.type === "ai-model" ? <FaFileAlt /> : <FaGithub />}
              View {p.type === "ai-model" ? "Paper" : "Github"}
            </a>
            <a
              href={p.type === "ai-model" ? p.modelLink : p.webLink}
              target="_blank"
              className="flex items-center gap-2 text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              {p.type === "ai-model" ? (
                <GiArtificialIntelligence />
              ) : (
                <MdPublic />
              )}
              Visit {p.type === "ai-model" ? "Model" : "Website"}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
