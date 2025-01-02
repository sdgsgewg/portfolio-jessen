import { v4 as uuidv4 } from "uuid";

const portfolioEntries = [
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/my-react-app/1.png",
    name: "My React App",
    slug: "my-react-app",
    techStack: ["React", "JS", "Tailwind CSS"],
    date: "1 December 2024 - Now",
    excerpt:
      "This project serves as a learning source for me to enhance my skill in using React to develop a website. This is an all in one productivity app where user ",
    moreText:
      "can manage their to-do lists, shopping cart, and track their expense. I use React JS and Tailwind CSS to develop this website.",
    ghLink: "https://github.com/sdgsgewg/my-react-app",
    webLink: "https://my-react-app-one-cyan.vercel.app",
    slide: "slide-left",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/spotify-clone-app/1.png",
    name: "Spotify Clone App",
    slug: "spotify-clone-app",
    techStack: ["React", "JS", "Tailwind CSS"],
    date: "1 December 2024 - Now",
    excerpt:
      "This project is a clone spotify app where we can control track in our spotify website. This website use spotify API to achieve this functionality. ",
    moreText:
      "In this website we can view our spotify account's playlists and tracks. We also can choose which track can be played, handle skip to previous or next track, handle pause or play track, and handle the track volumes. I use React JS and TailwindCSS to develop this website.",
    ghLink: "https://github.com/sdgsgewg/spotify-clone-react-app",
    slide: "slide-right",
    type: "website",
    isDeployed: false,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/PustakaBekas/1.png",
    name: "PustakaBekas",
    slug: "pustakabekas",
    techStack: ["Laravel", "Bootstrap"],
    date: "9 September 2024 - Now",
    excerpt:
      "This project is a website that serves as a marketplace for secondhand books. We developed this project as an effort to raise awareness about reusing secondhand products, ",
    moreText:
      "that are still in great condition. This marketplace supports normal transactions and trades, which is the key feature of this website. Users can trade books with each other as long as both books have prices within a 10% price range. We use Laravel as the framework and Bootstrap as the styling tools to develop this website.",
    ghLink: "https://github.com/sdgsgewg/PustakaBekas",
    webLink: "https://pustaka-bekas.vercel.app/",
    slide: "slide-left",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/InspiraUMKM/1.png",
    name: "InspiraUMKM",
    slug: "inspiraumkm",
    techStack: ["Laravel", "Bootstrap"],
    date: "9 September 2024 - Now",
    excerpt:
      "This project is a website that serves as a marketplace for packaging, banner, and sticker designs. We developed this project to help enhance the ",
    moreText:
      "value of UMKM stores. By using our designs, we aim to help their stores achieve better visual appeal. We used Laravel as the framework and Bootstrap as the styling tool to develop this website.",
    ghLink: "https://github.com/sdgsgewg/new-inspira-umkm",
    webLink: "https://new-inspira-umkm.vercel.app/",
    slide: "slide-right",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/NITIP-DONK/1.png",
    name: "NITIP DONK",
    slug: "nitip-donk",
    techStack: ["React", "TypeScript", "CSS"],
    date: "March 2024 - June 2024",
    excerpt:
      "NITIP DONK is a food pickup website that serves to help people order food or drinks from anytime and anywhere. This website was developed using React Vite, Typescript, and",
    moreText:
      "Vanilla CSS for styling. This project utilized scrum as the development life cycle. I contribute as the development team, precisely as the frontend developer.",
    ghLink: "https://github.com/jovitawaisakhi/NITIP",
    webLink: "#",
    slide: "slide-left",
    type: "website",
    isDeployed: false,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/CodeReEng/1.png",
    name: "Code Reengineering",
    slug: "code-reengineering",
    techStack: ["HTML", "CSS", "JS"],
    date: "15 April 2024 - 25 April 2024",
    excerpt:
      "This website serve to provide materials regarding code smells, such as change preventer and the dispensables. This project was developed using ",
    moreText: "HTML, Vanilla CSS, and JS.",
    ghLink: "https://github.com/sdgsgewg/CodeReengineering",
    webLink: "https://sdgsgewg.github.io/CodeReengineering/HomePage",
    slide: "slide-right",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/HI-TOYZ/1.png",
    name: "HI-Toyz",
    slug: "hi-toyz",
    techStack: ["HTML", "CSS", "JS"],
    date: "28 May 2023 - 13 June 2023",
    excerpt:
      "HI-Toyz is a website that serves to sell toys and provide information regarding the store’s detailed information. This website ",
    moreText: "was developed using HTML, Vanilla CSS, and JS.",
    ghLink: "https://github.com/sdgsgewg/HI-Toyz",
    webLink: "https://sdgsgewg.github.io/HI-Toyz/Home/Home_Page.html",
    slide: "slide-left",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/DOG-CARE/1.png",
    name: "DOG CARE",
    slug: "dog-care",
    techStack: ["HTML", "CSS", "JS"],
    date: "March 2023 - June 2023",
    excerpt:
      "DOG CARE is a website that serves to provide information about various dog breeds and provide consultation with a vet. This website was developed using HTML, Vanilla CSS, and JS.",
    moreText:
      "I contribute as the UI/UX designer on this project. I faced many problems during this project since this is the first project that I am working on, but I could overcome this problem by watching tutorials on the internet and asking for my friends help.",
    ghLink: "https://github.com/sdgsgewg/DOG-CARE",
    webLink: "https://sdgsgewg.github.io/DOG-CARE/",
    slide: "slide-right",
    type: "website",
    isDeployed: true,
  },
  {
    id: uuidv4(),
    image: "/assets/img/portfolio/YOLOv3/1.png",
    name: "Passengers Monitoring Models at Bus Stop",
    slug: "yolov3",
    techStack: ["Python"],
    date: "1 April 2024 - 20 August 2024",
    excerpt:
      "This project serves to monitor the number of people at Transjakarta bus stop, precisely at S.Parman Transjakarta bus stop. This project  was developed using Python, and",
    moreText:
      "we utilize a computer vision algorithm called the YOLOv3 algorithm to build the entire model. This project mainly focuses on examining  or analyzing which time and day have the highest amount of  people,number which may provide essential data regarding the density pattern in Jakarta bus stops.",
    paperLink: "https://ieeexplore.ieee.org/abstract/document/10704415",
    modelLink:
      "https://colab.research.google.com/drive/1od0r0MlhEnWHDHQOo8plLG6jRHShKwTW?usp=sharing",
    slide: "slide-left",
    type: "ai-model",
    isDeployed: true,
  },
];

export default portfolioEntries;
