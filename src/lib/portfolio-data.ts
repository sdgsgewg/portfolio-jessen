import { FRAMEWORK } from "@/app/constants/framework";
import { IMAGES } from "@/app/constants/images";
import { LIBRARY } from "@/app/constants/library";
import { PROGRAMMING_LANGUAGES } from "@/app/constants/programming-languages";

export type Portfolio = {
  image: string;
  name?: string;
  slug: string;
  techStack: string[];
  date: string;
  description?: {
    excerpt: string;
    moreText: string;
  };
  features?: string[];
  gallery?: string[];
  links: {
    github?: string;
    web?: string;
    paper?: string;
    model?: string;
  };
  type: "website" | "ai-model";
  isDeployed: boolean;
};

export const PORTFOLIO_ENTRIES: Portfolio[] = [
  {
    image: IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.P1,
    slug: "my-react-app",
    techStack: [
      LIBRARY.REACT,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    date: "1 December 2024 - 1 January 2025",
    gallery: [
      IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.P1,
      IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.P2,
      IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.P3,
    ],
    links: {
      github: "https://github.com/sdgsgewg/my-react-app",
      web: "https://my-react-app-one-cyan.vercel.app",
    },
    type: "website",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P1,
    slug: "spotify-clone-app",
    techStack: [
      LIBRARY.REACT,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    date: "1 December 2024 - 1 January 2025",
    gallery: [
      IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P1,
      IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P2,
    ],
    links: {
      github: "https://github.com/sdgsgewg/spotify-clone-react-app",
    },
    type: "website",
    isDeployed: false,
  },
  {
    image: IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1,
    slug: "inspira-umkm",
    techStack: [FRAMEWORK.LARAVEL, FRAMEWORK.BOOTSTRAP],
    date: "9 September 2024 - 10 January 2025",
    gallery: [IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1],
    links: {
      github: "https://github.com/sdgsgewg/new-inspira-umkm",
      web: "https://new-inspira-umkm.vercel.app/",
    },
    type: "website",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.P1,
    slug: "pustaka-bekas",
    techStack: [FRAMEWORK.LARAVEL, FRAMEWORK.BOOTSTRAP],
    date: "9 September 2024 - 10 December 2024",
    gallery: [IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.P1],
    links: {
      github: "https://github.com/sdgsgewg/PustakaBekas",

      web: "https://pustaka-bekas.vercel.app/",
    },
    type: "website",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.P1,
    slug: "passenger-monitoring-models-at-bus-stop",
    techStack: [PROGRAMMING_LANGUAGES.PYTHON],
    date: "1 April 2024 - 20 August 2024",
    gallery: [IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.P1],
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10704415",
      model:
        "https://colab.research.google.com/drive/1od0r0MlhEnWHDHQOo8plLG6jRHShKwTW?usp=sharing",
    },
    type: "ai-model",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P1,
    slug: "nitip-donk",
    techStack: [
      LIBRARY.REACT,
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      PROGRAMMING_LANGUAGES.CSS,
    ],
    date: "March 2024 - June 2024",
    gallery: [
      IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P1,
      IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P2,
    ],
    links: {
      github: "https://github.com/jovitawaisakhi/NITIP",
      web: "#",
    },
    type: "website",
    isDeployed: false,
  },
  {
    image: IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.P1,
    slug: "code-reengineering",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    date: "15 April 2024 - 25 April 2024",
    gallery: [
      IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.P1,
      IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.P2,
      IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.P3,
    ],
    links: {
      github: "https://github.com/sdgsgewg/CodeReengineering",
      web: "https://sdgsgewg.github.io/CodeReengineering/HomePage",
    },
    type: "website",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.P1,
    slug: "hi-toyz",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    date: "28 May 2023 - 13 June 2023",
    gallery: [
      IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.P1,
      IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.P2,
      IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.P3,
    ],
    links: {
      github: "https://github.com/sdgsgewg/HI-Toyz",
      web: "https://sdgsgewg.github.io/HI-Toyz/Home/Home_Page.html",
    },
    type: "website",
    isDeployed: true,
  },
  {
    image: IMAGES.PORTFOLIO.DOG_CARE.GALLERY.P1,
    slug: "dog-care",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    date: "March 2023 - June 2023",
    gallery: [
      IMAGES.PORTFOLIO.DOG_CARE.GALLERY.P1,
      IMAGES.PORTFOLIO.DOG_CARE.GALLERY.P2,
    ],
    links: {
      github: "https://github.com/sdgsgewg/DOG-CARE",
      web: "https://sdgsgewg.github.io/DOG-CARE/",
    },
    type: "website",
    isDeployed: true,
  },
];
