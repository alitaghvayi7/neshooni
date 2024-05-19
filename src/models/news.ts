export type SingleNews = {
  id: number;
  title: string;
  content: string;
  source: string;
  publish: boolean;
  favorite: boolean;
  type: string;
  img: string;
  created_at: string;
  source_title: string | null;
};

export type ListNews = {
  data: SingleNews[] | [];
};

export type NewsType = "social" | "official" | "organization";
