export type SingleNews = {
  id: number;
  title: string;
  content: string;
  source: string;
  publish: boolean;
  favorite: boolean;
  type: string;
  img: string;
};

export type ListNews = {
  data: SingleNews[] | [];
};

export type NewsType = "social" | "official" | "organization";
