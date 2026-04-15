import { DATABASE } from "@/constants/database";
import { FRAMEWORK } from "@/constants/framework";
import { IMAGES } from "@/constants/images";
import { LIBRARY } from "@/constants/library";
import { PLATFORMS } from "@/constants/platforms";
import { PROGRAMMING_LANGUAGES } from "@/constants/programming-languages";
import { TOOLS } from "@/constants/tools";
import { Portfolio } from "@/types/portfolio";

export const PORTFOLIO_ENTRIES: Portfolio[] = [
  {
    image: IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P1,
    slug: "gamification-website",
    techStack: [
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      FRAMEWORK.NEXT_JS,
      FRAMEWORK.NEST_JS,
      FRAMEWORK.TAILWIND_CSS,
      DATABASE.POSTGRESQL,
      PLATFORMS.SUPABASE,
      TOOLS.FIGMA,
    ],
    date: "February 2025 - March 2026",
    gallery: [
      {
        key: "guest",
        images: [IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.GUEST.P1],
      },
      {
        key: "auth",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.AUTH.REGISTER,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.AUTH.LOGIN,
        ],
      },
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P4,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P5,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P6,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P7,
        ],
      },
      {
        key: "subjects",
        images: [IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.SUBJECTS.P1],
      },
      {
        key: "activities",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.P4,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.FILTER.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ACTIVITIES.SECTIONS.P1,
        ],
      },
      {
        key: "history",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HISTORY.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HISTORY.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HISTORY.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HISTORY.P4,
        ],
      },
      {
        key: "leaderboard",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.LEADERBOARD.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.LEADERBOARD.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.LEADERBOARD.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.LEADERBOARD.P4,
        ],
      },
      {
        key: "profile",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.PROFILE.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.PROFILE.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.PROFILE.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.PROFILE.P4,
        ],
      },
      {
        key: "attempt-activity-process",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P4,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P5,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P6,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.ATTEMPT_ACTIVITY_PROCESS
            .P7,
        ],
      },
      {
        key: "student-dashboard",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .MY_CLASS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .MY_CLASS.DETAIL.TASKS,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .MY_CLASS.DETAIL.MEMBER_STUDENT,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .MY_CLASS.DETAIL.MEMBER_TEACHER,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .MY_CLASS.DETAIL.LEADERBOARD,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT.TASKS
            .P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT.TASKS
            .SUMMARY.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .ANALYTICS.CLASS_TASKS,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .ANALYTICS.ACTIVITY_TASKS,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .ANALYTICS.DETAIL.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.STUDENT
            .ANALYTICS.DETAIL.P2,
        ],
      },
      {
        key: "teacher-dashboard",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER
            .MY_CLASS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER
            .MY_CLASS.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER
            .MANAGE_TASKS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER
            .SUBMISSIONS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.TEACHER
            .ANALYTICS.P1,
        ],
      },
      {
        key: "admin-dashboard",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .MANAGE_TASKS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .ANALYTICS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .ANALYTICS.P2,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .ANALYTICS.P3,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .ANALYTICS.P4,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .MANAGE_SUBJECTS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .MANAGE_MATERIALS.P1,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.ADMIN
            .MANAGE_TASK_TYPES.P1,
        ],
      },
      {
        key: "dashboard-leaderboard",
        images: [
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.LEADERBOARD
            .CLASS,
          IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.DASHBOARD.LEADERBOARD
            .STUDENT,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/gamification-fe",
      web: "https://gamification-fe-phi.vercel.app/",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "fullstack",
      team: "team",
      featured: true,
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.TO_DO_LIST,
    slug: "my-react-app",
    techStack: [
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      LIBRARY.REACT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    date: "1 December 2024 - 1 January 2025",
    gallery: [
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.TO_DO_LIST,
          IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.SHOPPING_CART,
          IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.EXPENSE_TRACKER,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/my-react-app",
      web: "https://my-react-app-one-cyan.vercel.app",
    },
    type: "website",
    meta: {
      origin: "practice",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P1,
    slug: "spotify-clone-app",
    techStack: [
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      LIBRARY.REACT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    date: "1 December 2024 - 1 January 2025",
    gallery: [
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P1,
          IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P2,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/spotify-clone-react-app",
    },
    type: "website",
    meta: {
      origin: "practice",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1,
    slug: "inspira-umkm",
    techStack: [
      PROGRAMMING_LANGUAGES.PHP,
      FRAMEWORK.LARAVEL,
      FRAMEWORK.BOOTSTRAP,
      DATABASE.MYSQL,
      PLATFORMS.AIVEN,
      TOOLS.FIGMA,
    ],
    date: "9 September 2024 - 10 January 2025",
    gallery: [
      {
        key: "home",
        images: [IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/new-inspira-umkm",
      // web: "https://new-inspira-umkm.vercel.app/",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "fullstack",
      team: "team",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.HOME.HERO,
    slug: "pustaka-bekas",
    techStack: [
      PROGRAMMING_LANGUAGES.PHP,
      FRAMEWORK.LARAVEL,
      FRAMEWORK.BOOTSTRAP,
      DATABASE.MYSQL,
      PLATFORMS.AIVEN,
      TOOLS.FIGMA,
    ],
    date: "9 September 2024 - 10 December 2024",
    gallery: [
      {
        key: "guest",
        images: [IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.GUEST.P1],
      },
      {
        key: "authentication",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.AUTH.REGISTER,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.AUTH.LOGIN,
        ],
      },
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.HOME.HERO,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.HOME.TRENDING,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.HOME.RECENTLY_UPLOADED_BOOKS,
        ],
      },
      {
        key: "about",
        images: [IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.ABOUT.P1],
      },
      {
        key: "book-page",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.SEARCH.VALID_KEYWORD,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.SEARCH.NO_RESULT,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.FILTER.FILTER_MODAL,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.FILTER.BOOKS_BY_CATEGORY,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.FILTER.BOOKS_BY_GENRE,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.DETAIL.BUYER.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.DETAIL.BUYER.P2,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.DETAIL.BUYER.P3,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.DETAIL.SELLER.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.BOOKS.DETAIL.SELLER.P2,
        ],
      },
      {
        key: "category-page",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.CATEGORIES.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.CATEGORIES.DETAIL.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.CATEGORIES.DETAIL.P2,
        ],
      },
      {
        key: "seller-page",
        images: [IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SELLERS.P1],
      },
      {
        key: "cart-page",
        images: [IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.CARTS.P1],
      },
      {
        key: "transaction-process",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P2,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P3,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P4,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P5,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P6,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P7,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P8,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P9,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P10,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P11,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P12,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.TRANSACTIONS.P13,
        ],
      },
      {
        key: "send-feedback-process",
        images: [
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P1,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P2,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P3,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P4,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P5,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P6,
          IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.SEND_FEEDBACK.P7,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/PustakaBekas",
      // web: "https://pustaka-bekas.vercel.app/",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "fullstack",
      team: "team",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.TUESDAY,
    slug: "passenger-monitoring-models-at-bus-stop",
    techStack: [PROGRAMMING_LANGUAGES.PYTHON],
    date: "1 April 2024 - 20 August 2024",
    gallery: [
      {
        key: "experiment",
        images: [
          IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.MONDAY,
          IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.TUESDAY,
          IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.WEDNESDAY,
          IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.THURSDAY,
          IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.FRIDAY,
        ],
      },
      {
        key: "result",
        images: [IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.RESULT],
      },
    ],
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10704415",
      model:
        "https://colab.research.google.com/drive/1od0r0MlhEnWHDHQOo8plLG6jRHShKwTW?usp=sharing",
    },
    type: "ai-model",
    meta: {
      origin: "assignment",
      role: "ai",
      team: "team",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P1,
    slug: "nitip-donk",
    techStack: [
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      PROGRAMMING_LANGUAGES.CSS,
      LIBRARY.REACT,
      DATABASE.FIRESTORE,
      PLATFORMS.FIREBASE,
      TOOLS.FIGMA,
    ],
    date: "March 2024 - June 2024",
    gallery: [
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P1,
          IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P2,
        ],
      },
    ],
    links: {
      github: "https://github.com/jovitawaisakhi/NITIP",
      // web: "#",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "frontend",
      team: "team",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.HOME,
    slug: "code-reengineering",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    date: "15 April 2024 - 25 April 2024",
    gallery: [
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.HOME,
          IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.CHANGE_PREVENTER,
          IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.THE_DISPENSABLES,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/CodeReengineering",
      web: "https://sdgsgewg.github.io/CodeReengineering/HomePage",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.HI_TOYZ.HOME.HERO,
    slug: "hi-toyz",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      TOOLS.FIGMA,
    ],
    date: "28 May 2023 - 13 June 2023",
    gallery: [
      {
        key: "authentication",
        images: [
          IMAGES.PORTFOLIO.HI_TOYZ.AUTH.REGISTER.P1,
          IMAGES.PORTFOLIO.HI_TOYZ.AUTH.REGISTER.P2,
        ],
      },
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.HI_TOYZ.HOME.HERO,
          IMAGES.PORTFOLIO.HI_TOYZ.HOME.IN_DEMAND_ITEMS,
          IMAGES.PORTFOLIO.HI_TOYZ.HOME.CTA,
        ],
      },
      {
        key: "gallery",
        images: [
          IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.OUR_OFFLINE_STORE,
          IMAGES.PORTFOLIO.HI_TOYZ.GALLERY.OUR_CUSTOMER,
        ],
      },
      {
        key: "product",
        images: [
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.HERO,
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.TOP_BRANDS,
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.PRODUCT_LIST,
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.DETAIL.OVERVIEW,
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.DETAIL.DESCRIPTION,
          IMAGES.PORTFOLIO.HI_TOYZ.PRODUCTS.DETAIL.REVIEWS,
        ],
      },
      {
        key: "event",
        images: [
          IMAGES.PORTFOLIO.HI_TOYZ.EVENT.PROMOTIONS,
          IMAGES.PORTFOLIO.HI_TOYZ.EVENT.ACTIVITIES,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/HI-Toyz",
      web: "https://sdgsgewg.github.io/HI-Toyz/Home/Home_Page.html",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },
  {
    image: IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.DOG_LIST,
    slug: "dog-care",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    date: "March 2023 - June 2023",
    gallery: [
      {
        key: "guest",
        images: [IMAGES.PORTFOLIO.DOG_CARE.GALLERY.GUEST.P1],
      },
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.HERO,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.DOG_LIST,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.SERVICE.P1,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.SERVICE.P2,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.CONSULTATION,
        ],
      },
      {
        key: "about",
        images: [IMAGES.PORTFOLIO.DOG_CARE.GALLERY.ABOUT],
      },
      {
        key: "dog-page",
        images: [
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.DOG_LIST,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.DOG_DETAIL,
        ],
      },
      {
        key: "consultation",
        images: [
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.CONSULTATION.CHAT,
          IMAGES.PORTFOLIO.DOG_CARE.GALLERY.CONSULTATION.CALL,
        ],
      },
    ],
    links: {
      github: "https://github.com/sdgsgewg/DOG-CARE",
      web: "https://sdgsgewg.github.io/DOG-CARE/",
    },
    type: "website",
    meta: {
      origin: "assignment",
      role: "ui-ux",
      team: "team",
      status: "completed",
    },
  },
];
