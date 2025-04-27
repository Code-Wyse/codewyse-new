export type RecentWork = {
    id: number;
    featured: {
      name1: string;
      name2: string;
    };
    image: string; // better to use string instead of "any"
    buttonUrl: string;
  };
  