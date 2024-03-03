type SingleNews = {
  id: number;
  title: string;
  content: string;
  source: string;
  publish: boolean;
  favorite: boolean;
  type: string;
  img: string;
};

type ListNews = {
  data: SingleNews[] | [];
};
