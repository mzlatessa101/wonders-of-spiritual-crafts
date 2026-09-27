export type Lesson = {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "All levels";
  summary: string;
  content: string[];
};

export type Category = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  lessons: Lesson[];
};

export const categories: Category[] = [];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
