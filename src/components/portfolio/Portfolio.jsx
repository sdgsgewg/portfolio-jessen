import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import pfImage1 from "../assets/images/Portfolio/NITIP-DONK/1.png";
import pfImage2 from "../assets/images/Portfolio/CodeReEng/1.png";
import pfImage3 from "../assets/images/Portfolio/HI-TOYZ/1.png";
import pfImage4 from "../assets/images/Portfolio/DOG-CARE/1.png";
import pfImage5 from "../assets/images/Portfolio/YOLOv3/1.png";

const portfolioEntry = [
  {
    id: "p0",
    image: { pfImage1 },
    name: "NITIP DONK",
    slug: "nitip-donk",
    date: "March 2024 - June 2024",
    excerpt:
      "NITIP DONK is a food pickup website that serves to help people order food or drinks from anytime and anywhere. This website was developed using React Vite, Typescript, and",
    moreText:
      "Vanilla CSS for styling. This project utilized scrum as the development life cycle. I contribute as the development team, precisely as the frontend developer.",
    ghLink: "https://github.com/jovitawaisakhi/NITIP",
    webLink: "#",
    slide: "slide-left",
    type: "website",
  },
  {
    id: "p1",
    image: { pfImage2 },
    name: "Code Reengineering",
    slug: "code-reengineering",
    date: "15 April 2024 - 25 April 2024",
    excerpt:
      "This website serve to provide materials regarding code smells, such as change preventer and the dispensables. This project was developed using HTML, Vanilla CSS, and JS.",
    moreText:
      "This project only focused on frontend functionality without being integrated with any backend functionality.",
    ghLink: "https://github.com/sdgsgewg/CodeReengineering",
    webLink: "https://sdgsgewg.github.io/CodeReengineering/HomePage",
    slide: "slide-right",
    type: "website",
  },
  {
    id: "p2",
    image: { pfImage3 },
    name: "HI-Toyz",
    slug: "hi-toyz",
    date: "28 May 2023 - 13 June 2023",
    excerpt:
      "HI-Toyz is a website that serves to sell toys and provide information regarding the store’s detailed information. This website",
    moreText: "was developed using HTML, Vanilla CSS, and JS.",
    ghLink: "https://github.com/sdgsgewg/HI-Toyz",
    webLink: "https://sdgsgewg.github.io/HI-Toyz/Home/Home_Page.html",
    slide: "slide-left",
    type: "website",
  },
  {
    id: "p3",
    image: { pfImage4 },
    name: "DOG CARE",
    slug: "dog-care",
    date: "March 2023 - June 2023",
    excerpt:
      "DOG CARE is a website that serves to provide information about various dog breeds and provide consultation with a vet. This website was developed using HTML, Vanilla CSS, and JS.",
    moreText:
      "I contribute as the UI/UX designer on this project. I faced many problems during this project since this is the first project that I am working on, but I could overcome this problem by watching tutorials on the internet and asking for my friends help.",
    ghLink: "https://github.com/sdgsgewg/DOG-CARE",
    webLink: "https://sdgsgewg.github.io/DOG-CARE/",
    slide: "slide-right",
    type: "website",
  },
  {
    id: "p4",
    image: { pfImage5 },
    name: "Passengers Monitoring Models at Bus Stop",
    slug: "yolov3",
    date: "1 April 2024 - 20 August 2024",
    excerpt:
      "This project serves to monitor the number of people at Transjakarta bus stop, precisely at S.Parman Transjakarta bus stop. This project  was developed using Python, and",
    moreText:
      "we utilize a computer vision algorithm called the YOLOv3 algorithm to build the entire model. This project mainly focuses on examining  or analyzing which time and day have the highest amount of  people,number which may provide essential data regarding the density pattern in Jakarta bus stops.",
    modelLink:
      "https://colab.research.google.com/drive/1od0r0MlhEnWHDHQOo8plLG6jRHShKwTW?usp=sharing",
    slide: "slide-left",
    type: "ai-model",
  },
];

export default function Portfolio() {
  const [myPortfolio, setMyPortfolio] = useState(portfolioEntry);

  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Recent Project
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Here are some of my recent projects that showcase my skills and
              dedication to web development. Click on each project to learn more
              about the process, technologies used, and challenges overcome.
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
