import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import XIcon from "./icons/XIcon";
import TikTokIcon from "./icons/TikTokIcon";

export default function SocialLinks() {
  return (
    <>
      <a
        href="https://www.instagram.com/jessen_/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <InstagramIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/jessen-jessen-829545313/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://github.com/sdgsgewg"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <GitHubIcon />
      </a>

      <a
        href="https://youtube.com/@jessenjessen9454?si=tE3jh-qFr4yGhZqY"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <YouTubeIcon />
      </a>

      <a
        href="https://x.com/jessen261103"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <XIcon />
      </a>

      <a
        href="https://www.tiktok.com/@jessenjessen014"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <TikTokIcon />
      </a>
    </>
  );
}
