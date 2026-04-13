"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Copyright from "../footer/Copyright";
import Contact from "../footer/Contact";

export function Footer() {
  const [isFooter, setIsFooter] = useState(true);

  return (
    <footer>
      <div className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <Contact />
            <Navigation isFooter={isFooter} />
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
