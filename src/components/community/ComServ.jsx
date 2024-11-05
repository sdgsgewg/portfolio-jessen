import { useState } from "react";
import ComServCard from "./ComServCard";

const comServEntry = [
  {
    id: "cs0",
    image: "/assets/img/comserv/sem3/1.png",
    subject: "CB Agama",
    title: "Bersama-sama Menuju Toleransi dan Keadilan Dalam Beragama",
    date: "September 2023 - December 2023",
    location: "Griya Yatim & Dhuafa",
    excerpt:
      "I participated as a volunteer with a group of six to educate the community about interfaith tolerance and its importance for achieving justice in society.",
    moreText:
      "By organizing this campaign, I contributed to raising awareness of respecting religious differences and fostering mutual respect among different faiths in Indonesia, particularly in the DKI Jakarta area. Additionally, I aimed to instill religious values to help the audience develop a better understanding of multicultural issues and avoid conflicts based on religious differences.",
    slide: "slide-left",
  },
  {
    id: "cs1",
    image: "/assets/img/comserv/sem2/1.jpg",
    subject: "CB Kewarganegaraan",
    title:
      "Edukasi Terkait Kebudayaan-Kebudayaan di Indonesia Khususnya Dalam Permainan Daerah",
    date: "March 2023 - June 2023",
    location: "Panti Asuhan Yayasan Sosial Tangan Kasih",
    excerpt:
      "I participated as a volunteer with a group of seven in theintroduction and education activities about Indonesian culture. I felt fortunate to have the opportunity to explain ",
    moreText:
      "traditional games and the cultural values they embody. I alsorealize that as the younger generation, we must actively participate in preserving and promoting Indonesian culture, which is the most valuable asset of a nation.",
    slide: "slide-right",
  },
  {
    id: "cs2",
    image: "/assets/img/comserv/sem1/1.jpg",
    subject: "CB Pancasila",
    title: "Kegiatan Sosialisasi Anti Bullying",
    date: "September 2022 - December 2022",
    location: "SMP Labschool Madinah",
    excerpt:
      "I participated as a volunteer with a group of nine to socialize an anti-bullying campaign, recognizing the dangers of bullying, especially among teenagers.",
    moreText:
      "After the campaign, I felt fortunate to have the opportunity to explain the increasingly common problem of bullying in schools. The key takeaway for me was the importance of enhancing my awareness and concern for every social issue occurring in our community.",
    slide: "slide-left",
  },
];

export default function ComServ() {
  const [comServs, setComServs] = useState(comServEntry);

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
