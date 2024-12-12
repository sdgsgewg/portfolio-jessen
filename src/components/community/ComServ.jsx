import { useState } from "react";
import ComServCard from "./ComServCard";
import comservEntries from "../../data/comservEntries";

export default function ComServ() {
  const [comServs, setComServs] = useState(comservEntries);

  return (
    <section id="community" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">
              Community Services
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Recent Activities
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Here are some of my recent community service projects that
              highlight my commitment to making a positive impact. Click on each
              project to explore the initiatives I participated in, the goals we
              aimed to achieve, and the skills I developed while working
              collaboratively with diverse groups.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {comServs.map((comserv) => (
            <ComServCard key={comserv.id} comserv={comserv} />
          ))}
        </div>
      </div>
    </section>
  );
}
