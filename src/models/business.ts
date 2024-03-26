export type singleBusiness = {
  id: number;
  name: string;
  address_id: null | number;
  category_id: number;
  bussinessman_id: null | number;
  desc: string;
  index: boolean;
  open: boolean;
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
