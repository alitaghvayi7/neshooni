export type singleTourismCard = {
  id: number;
  title: string;
  content: string;
  source: string;
  address_id: null | number;
  category_id: 2 | null;
  publish: boolean;
  favorite: boolean;
  img: string;
  created_at: string;
  updated_at: string;
  scorings: [
    {
      scorable_id: number;
      scorable_type: string;
      average_score: string;
    },
  ];
};

export type SingleTourism = {
  id: number;
  title: string;
  content: string;
  source: string;
  address_id: null | number;
  category_id: number;
  publish: boolean;
  favorite: boolean;
  img: string;
  average_score: {
    average_score: string;
  }[];
  comments_count: number;
};
