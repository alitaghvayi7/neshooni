import { singleBusiness } from "@/models/business";
import { baseURL } from "./news";

export const getTopBusiness = async (): Promise<singleBusiness[]> => {
  try {
    const req = await fetch(`${baseURL}/shop/top`, {
      next: {
        revalidate: 0,
      },
    });
    return req.json();
  } catch (error) {
    return [];
  }
};
