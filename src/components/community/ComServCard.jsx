import useReadMoreToggle from "../../hooks/useReadMoreToggle";

export default function ComServCard({ comserv }) {
  const toggleText = useReadMoreToggle();

  return (
    <div className={`${comserv.slide} mb-12 p-4 md:w-1/2`}>
      <div className="rounded-md shadow-md w-full h-[280px] overflow-hidden">
        <img
          src={comserv.image}
          alt={comserv.subject}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
        {comserv.title}
      </h3>
      <h4 className="font-semibold text-base text-secondary mb-2">
        {comserv.date}
      </h4>
      <h4 className="font-semibold text-base text-secondary mb-3">
        {comserv.location}
      </h4>
      <p className="font-medium text-base text-secondary">
        {comserv.excerpt}
        <span
          className="moreText"
          data-id={comserv.id}
          style={{ display: "none" }}
        >
          {comserv.moreText}
        </span>
      </p>
      <button
        onClick={() => toggleText(comserv.id)}
        className="toggleButton text-blue-500 font-semibold mt-2 mb-6"
        data-id={comserv.id}
      >
        Read More
      </button>
    </div>
  );
}
