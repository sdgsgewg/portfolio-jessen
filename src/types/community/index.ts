import { ExpandableText } from "../ExpandableText";

export type ComServ = {
  image: string;
  subject: string;
  title?: string;
  slug: string;
  date?: string;
  location: string;

  description?: ExpandableText;

  gallery?: string[];
};
