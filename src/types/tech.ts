export type TechCategory =
  | "language"
  | "framework"
  | "library"
  | "database"
  | "tool"
  | "platform";

export interface TechItem {
  name: string;
  category: TechCategory;
}
