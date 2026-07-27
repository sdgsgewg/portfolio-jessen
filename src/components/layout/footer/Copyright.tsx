import React from "react";

const Copyright = () => {
  return (
    <div className="font-medium text-xs text-slate-500 text-center">
      Made with <span className="text-pink-500">❤️</span> by{" "}
      <a
        href="https://www.instagram.com/jessen_/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-primary"
      >
        Jessen
      </a>
      , using{" "}
      <a
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 font-bold"
      >
        Next.js
      </a>{" "}
      and{" "}
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 font-bold"
      >
        Tailwind CSS
      </a>
      .
    </div>
  );
};

export default Copyright;
