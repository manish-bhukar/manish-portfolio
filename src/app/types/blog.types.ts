export type BlogPost = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured?: boolean;
  href: string;
};