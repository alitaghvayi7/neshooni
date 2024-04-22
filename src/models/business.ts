export type singleBusiness = {
  id: number;
  name: string;
  address_id: null | number;
  desc: string;
  category: {
    id: number;
    title: string;
    desc: null | string;
    type: "business";
    icon: string;
    color: null;
  };
  address: null | {
    id: number;
    parent_id: number;
    type: "shop";
    type_fn: "مغازه";
    toward: boolean;
    index: string;
    relation_id: null;
    desc: string;
    name: string;
    region: string;
    lat: null | string;
    long: null | string;
    address: string;
    parent: any;
  };
  bussinessman: null;
  index: boolean;
  open: boolean;
  img: null | string;
  average_score: [
    {
      scorable_id: number;
      scorable_type: string;
      average_score: string;
    },
  ];
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
