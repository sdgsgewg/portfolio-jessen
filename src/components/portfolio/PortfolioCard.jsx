import useReadMoreToggle from "../../hooks/useReadMoreToggle";

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
      <h4 className="font-semibold text-base text-secondary mb-3">{p.date}</h4>
      <p className="font-medium text-base text-secondary">
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
        {p.type === "ai-model" ? (
          <a
            href={p.modelLink}
            target="_blank"
            className="text-base font-semibold text-white bg-slate-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            View Model
          </a>
        ) : (
          <>
            <a
              href={p.ghLink}
              target="_blank"
              className="text-base font-semibold text-white bg-slate-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              View GitHub
            </a>
            <a
              href={p.webLink}
              target="_blank"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Visit Website
            </a>
          </>
        )}
      </div>
    </div>
  );
}
