import SocialLinks from "../SocialLinks";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Nav from "../Nav";
import { useState } from "react";

export default function Footer() {
  const [isFooter, setIsFooter] = useState(true);

  return (
    <footer>
      <div className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <Contact />
            <Nav isFooter={isFooter} />
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <SocialLinks />
            </div>

            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}
