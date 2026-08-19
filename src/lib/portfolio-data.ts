import { DATABASE } from "@/constants/database";
import { FRAMEWORK } from "@/constants/framework";
import { IMAGES } from "@/constants/images";
import { LIBRARY } from "@/constants/library";
import { PLATFORMS } from "@/constants/platforms";
import { PROGRAMMING_LANGUAGES } from "@/constants/programming-languages";
import { TOOLS } from "@/constants/tools";
import { PortfolioListItem } from "@/types/portfolio";

export const PORTFOLIO_ENTRIES: PortfolioListItem[] = [
  {
    image: IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.P1,
    name: "FootyVerse",
    slug: "footy-verse",
    techStack: [
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      FRAMEWORK.NEXT_JS,
      FRAMEWORK.TAILWIND_CSS,
      DATABASE.POSTGRESQL,
      PLATFORMS.SUPABASE,
    ],
    startDate: "2026-06",
    gallery: [
      {
        key: "teams",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P2,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P3,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P4,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P5,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.CLUB_TEAMS.P6,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P2,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P3,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P4,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P5,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.TEAMS.NATIONAL_TEAMS.P5,
        ],
      },

      {
        key: "dashboard",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.HOME.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.HOME.P2,
        ],
      },

      {
        key: "dashboard-players",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.LIST.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL.P2,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL.P3,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL.P4,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL
            .PLAYER_CLUB_TEAM_CAREER.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL
            .PLAYER_CLUB_TEAM_CAREER.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL
            .PLAYER_NATIONAL_TEAM_CAREER.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.DETAIL
            .PLAYER_NATIONAL_TEAM_CAREER.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.CREATE.P1,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.PLAYERS.EDIT.P1,
        ],
      },

      {
        key: "dashboard-clubs",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.LIST.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.DETAIL.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.DETAIL.P2,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.DETAIL.P3,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.DETAIL.CLUB_TEAM
            .P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.DETAIL.CLUB_TEAM
            .P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.CREATE.P1,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CLUBS.EDIT.P1,
        ],
      },

      {
        key: "dashboard-nationalities",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.LIST.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.DETAIL
            .P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.DETAIL
            .P2,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.DETAIL
            .P3,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.DETAIL
            .NATIONAL_TEAM.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.DETAIL
            .NATIONAL_TEAM.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.CREATE
            .P1,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.NATIONALITIES.EDIT.P1,
        ],
      },

      {
        key: "dashboard-seasons",
        images: [IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.SEASONS.P1],
      },

      {
        key: "dashboard-regions",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.REGIONS.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.REGIONS.CREATE.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.REGIONS.EDIT.P1,
        ],
      },

      {
        key: "dashboard-confederations",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CONFEDERATIONS.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CONFEDERATIONS.CREATE
            .P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.CONFEDERATIONS.EDIT.P1,
        ],
      },

      {
        key: "dashboard-competitions",
        images: [
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.LIST.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.LIST.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.DETAIL.P1,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.CREATE.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.CREATE.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.EDIT.P1,
          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.EDIT.P2,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.CATEGORIES
            .P1,

          IMAGES.PORTFOLIO.FOOTY_VERSE.GALLERY.DASHBOARD.COMPETITIONS.SCOPES.P1,
        ],
      },
    ],
    links: {
      github: {
        frontend: "https://github.com/sdgsgewg/footy-verse",
        backend: "https://github.com/sdgsgewg/footy-verse",
      },
      web: "https://footy-verse-sage.vercel.app/en",
    },
    meta: {
      origin: "practice",
      platform: "website",
      role: "fullstack",
      team: "solo",
      featured: false,
      status: "in-progress",
    },
  },

  {
    image: IMAGES.PORTFOLIO.INVESTBIT.GALLERY.HOME.P1,
    name: "Investbit",
    slug: "investbit",
    techStack: [
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      FRAMEWORK.NEXT_JS,
      FRAMEWORK.TAILWIND_CSS,
      DATABASE.POSTGRESQL,
      PLATFORMS.SUPABASE,
    ],
    startDate: "2026-03",
    endDate: "2026-08",
    gallery: [
      {
        key: "home",
        images: [
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.HOME.P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.HOME.P2,
        ],
      },
      {
        key: "learn",
        images: [
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P2,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P3,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P4,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P5,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P6,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P7,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P8,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P9,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.LEARN.P10,
        ],
      },
      {
        key: "glossary",
        images: [
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.GLOSSARY.P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.GLOSSARY.P2,
        ],
      },
      {
        key: "mutual-fund-performance",
        images: [
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.MUTUAL_FUND.PERFORMANCE.P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.MUTUAL_FUND.PERFORMANCE.P2,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.MUTUAL_FUND.PERFORMANCE.P3,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.MUTUAL_FUND.PERFORMANCE.P4,
        ],
      },
      {
        key: "dashboard",
        images: [
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.DASHBOARD.MUTUAL_FUND.CATEGORIES
            .P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.DASHBOARD.MUTUAL_FUND.ITEMS.P1,
          IMAGES.PORTFOLIO.INVESTBIT.GALLERY.DASHBOARD.MUTUAL_FUND.RECORDS.P1,
        ],
      },
    ],
    links: {
      github: {
        frontend: "https://github.com/sdgsgewg/investbit",
        backend: "https://github.com/sdgsgewg/investbit",
      },
      web: "https://investbit-xi.vercel.app/en",
    },
    meta: {
      origin: "practice",
      platform: "website",
      role: "fullstack",
      team: "solo",
      featured: true,
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.GAMIFICATION_WEBSITE.GALLERY.HOME.P1,
    name: "Gamification Website",
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
    startDate: "2025-02",
    endDate: "2026-03",
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
      github: {
        frontend: "https://github.com/sdgsgewg/gamification-fe",
        backend: "https://github.com/sdgsgewg/gamification-be",
      },
      web: "https://gamification-fe-phi.vercel.app/",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "fullstack",
      team: "team",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.MY_REACT_APP.GALLERY.TO_DO_LIST,
    name: "My React App",
    slug: "my-react-app",
    techStack: [
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      LIBRARY.REACT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    startDate: "2024-12-01",
    endDate: "2025-01-01",
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
      github: {
        frontend: "https://github.com/sdgsgewg/my-react-app",
      },
      web: "https://my-react-app-one-cyan.vercel.app",
    },
    meta: {
      origin: "practice",
      platform: "website",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.SPOTIFY_CLONE_APP.GALLERY.P1,
    name: "Spotify Clone App",
    slug: "spotify-clone-app",
    techStack: [
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      LIBRARY.REACT,
      FRAMEWORK.TAILWIND_CSS,
    ],
    startDate: "2024-12-01",
    endDate: "2025-01-01",
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
      github: {
        frontend: "https://github.com/sdgsgewg/spotify-clone-react-app",
      },
    },
    meta: {
      origin: "practice",
      platform: "website",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1,
    name: "InspiraUMKM",
    slug: "inspira-umkm",
    techStack: [
      PROGRAMMING_LANGUAGES.PHP,
      FRAMEWORK.LARAVEL,
      FRAMEWORK.BOOTSTRAP,
      DATABASE.MYSQL,
      PLATFORMS.AIVEN,
      TOOLS.FIGMA,
    ],
    startDate: "2024-09-09",
    endDate: "2025-01-10",
    gallery: [
      {
        key: "home",
        images: [IMAGES.PORTFOLIO.INSPIRA_UMKM.GALLERY.P1],
      },
    ],
    links: {
      github: {
        frontend: "https://github.com/sdgsgewg/new-inspira-umkm",
        backend: "https://github.com/sdgsgewg/new-inspira-umkm",
      },
      // web: "https://new-inspira-umkm.vercel.app/",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "fullstack",
      team: "team",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.PUSTAKA_BEKAS.GALLERY.HOME.HERO,
    name: "Pustaka Bekas",
    slug: "pustaka-bekas",
    techStack: [
      PROGRAMMING_LANGUAGES.PHP,
      FRAMEWORK.LARAVEL,
      FRAMEWORK.BOOTSTRAP,
      DATABASE.MYSQL,
      PLATFORMS.AIVEN,
      TOOLS.FIGMA,
    ],
    startDate: "2024-09-09",
    endDate: "2024-12-10",
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
      github: {
        frontend: "https://github.com/sdgsgewg/PustakaBekas",
        backend: "https://github.com/sdgsgewg/PustakaBekas",
      },
      // web: "https://pustaka-bekas.vercel.app/",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "fullstack",
      team: "team",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.PASSENGER_MONITORING_MODEL.GALLERY.TUESDAY,
    name: "Passengers Monitoring Models at Bus Stop",
    slug: "passenger-monitoring-models-at-bus-stop",
    techStack: [PROGRAMMING_LANGUAGES.PYTHON],
    startDate: "2024-04-01",
    endDate: "2024-08-20",
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
    meta: {
      origin: "assignment",
      platform: "ai-model",
      role: "ai",
      team: "team",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.NITIP_DONK.GALLERY.P1,
    name: "NITIP DONK",
    slug: "nitip-donk",
    techStack: [
      PROGRAMMING_LANGUAGES.TYPESCRIPT,
      PROGRAMMING_LANGUAGES.CSS,
      LIBRARY.REACT,
      DATABASE.FIRESTORE,
      PLATFORMS.FIREBASE,
      TOOLS.FIGMA,
    ],
    startDate: "2024-03-01",
    endDate: "2024-06-30",
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
      github: {
        frontend: "https://github.com/jovitawaisakhi/NITIP",
      },
      // web: "#",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "frontend",
      team: "team",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.CODE_RE_ENG.GALLERY.HOME,
    name: "Code Reengineering",
    slug: "code-reengineering",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    startDate: "2024-04-15",
    endDate: "2024-04-25",
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
      github: {
        frontend: "https://github.com/sdgsgewg/CodeReengineering",
      },
      web: "https://sdgsgewg.github.io/CodeReengineering/HomePage",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.HI_TOYZ.HOME.HERO,
    name: "HI-Toyz",
    slug: "hi-toyz",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      TOOLS.FIGMA,
    ],
    startDate: "2023-05-28",
    endDate: "2023-06-13",
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
      github: {
        frontend: "https://github.com/sdgsgewg/HI-Toyz",
      },
      web: "https://sdgsgewg.github.io/HI-Toyz/Home/Home_Page.html",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "frontend",
      team: "solo",
      status: "completed",
    },
  },

  {
    image: IMAGES.PORTFOLIO.DOG_CARE.GALLERY.HOME.DOG_LIST,
    name: "Dog Care",
    slug: "dog-care",
    techStack: [
      PROGRAMMING_LANGUAGES.HTML,
      PROGRAMMING_LANGUAGES.CSS,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
    ],
    startDate: "2023-03-01",
    endDate: "2023-06-30",
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
      github: {
        frontend: "https://github.com/sdgsgewg/DOG-CARE",
      },
      web: "https://sdgsgewg.github.io/DOG-CARE/",
    },
    meta: {
      origin: "assignment",
      platform: "website",
      role: "ui-ux",
      team: "team",
      status: "completed",
    },
  },
];
