import Navigation from "./Navigation";
import SocialLinks from "../../shared/SocialLinks";
import Copyright from "./Copyright";
import Contact from "./Contact";

export function Footer() {
  return (
    <footer>
      <div className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <Contact />
            <Navigation />
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
