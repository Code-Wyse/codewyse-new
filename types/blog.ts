export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: string;
  metadata?: string;
  body?: React.ReactNode;
  mainImage?: any;
  author?: Author;
  category?: string;
  readTime?: string;
  tags?: string[];
  publishedAt?: string;
  faqs?: Faq[];
};
