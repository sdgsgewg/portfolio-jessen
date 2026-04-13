import { IMAGES } from "@/app/constants/images";
import { v4 as uuidv4 } from "uuid";

export type ComServ = {
  id: string;
  image: string;
  subject: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  moreText: string;
  slide: string;
};

export const COMSERV_ENTRIES: Record<"en" | "id", ComServ[]> = {
  en: [
    {
      id: "com-3",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM1.GALLERY.P1,
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
      id: "com-2",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM2.GALLERY.P1,
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
      id: "com-1",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM3.GALLERY.P1,
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
  ],
  id: [
    {
      id: "com-3",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM1.GALLERY.P1,
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
      id: "com-2",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM2.GALLERY.P1,
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
      id: "com-1",
      image: IMAGES.COMMUNITY.COMSERV.BINUS_SEM3.GALLERY.P1,
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
  ],
};
