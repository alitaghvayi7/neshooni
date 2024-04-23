export type BusinessDetails = {
  id: number;
  key: string;
  value: string;
  type: null;
  shop_id: number;
  created_at: string;
  updated_at: string;
};

export type SingleBusiness = {
  id: number;
  name: string;
  address_id: 3 | null;
  desc: string;
  bussinessman_id: number | null;
  details: BusinessDetails[];
  category_id: number;
  category: {
    id: 5;
    title: "فروشگاه";
    desc: null;
    type: "business";
    icon: "https://borna.news/files/fa/news/1400/6/15/2178317_666.jpg";
    color: null;
  };
  address: {
    id: number;
    parent_id: number;
    type: "shop";
    type_fn: string;
    toward: boolean;
    index: string;
    relation_id: null;
    desc: string | null;
    name: string;
    region: string | null;
    lat: null | string;
    long: null | string;
    address: string;
    parent: {
      id: 1;
      parent_id: null;
      type: "street";
      index: null;
      toward: null;
      desc: string | null;
      region: string | null;
      lat: string | null;
      long: string | null;
      name: string;
      relation_id: null | number;
      created_at: string;
      updated_at: string;
    };
  };
  bussinessman: null;
  index: boolean;
  open: boolean;
  img: string | null;
  average_score: {
    average_score: string;
  }[];
  comments_count: number;
};

export type businessSlider = {
  id: number;
  name: string;
  address_id: null;
  category_id: number;
  bussinessman_id: null;
  desc: string;
  index: boolean;
  open: boolean;
  img: string | null;
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
