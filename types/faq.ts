import { JSX } from "react";

export type FAQ = {
  id: number;
  quest: string;
  ans: string | (() => JSX.Element);
};
