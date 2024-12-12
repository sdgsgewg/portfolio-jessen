import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import portfolioEntries from "../../data/portfolioEntries";

export default function Portfolio() {
  const [myPortfolio, setMyPortfolio] = useState(portfolioEntries);

  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              My Projects
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Here are some of my projects that showcase my skills and
              dedication to web development and other computer science field.
              Click on each project to learn more about the process,
              technologies used, and challenges overcome.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {myPortfolio.map((portfolio) => (
            <PortfolioCard key={portfolio.id} p={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
}
