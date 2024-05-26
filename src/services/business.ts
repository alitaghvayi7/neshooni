import { SingleBusiness, businessSlider } from "@/models/business";
import { baseURL } from "./news";

export const getBusinessPointsFromLocation = async (lat: any, lng: any) => {
  try {
    const req = await fetch(`${baseURL}/search/map?lat=34.63935180663382&long=50.878894309208384&radius=30&type=shop`, {
      next: {
        revalidate: 0,
      },
    });
    return req.json();
  } catch (error) {
    return [];
  }
};

export const getTopBusiness = async (): Promise<businessSlider[]> => {
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

export const getSingleBusiness = async ({
  id,
}: {
  id: string;
}): Promise<
  | {
      data: SingleBusiness | null;
      statusCode: number;
    }
  | "Error"
> => {
  try {
    const req = await fetch(`${baseURL}/shop/${id}`, {
      next: {
        revalidate: 0,
      },
    });
    if (req.ok) {
      return {
        data: {
          ...(await req.json())?.data,
        },
        statusCode: req.status,
      };
    } else {
      return {
        data: null,
        statusCode: req.status,
      };
    }
  } catch (error) {
    return "Error";
  }
};

export const getBusinessList = async ({
  page,
}: {
  page: number;
}): Promise<
  | {
      data: SingleBusiness[];
      total: number;
    }
  | "Error"
> => {
  try {
    const req = await fetch(`${baseURL}/shop?page=${page}`, {
      next: {
        revalidate: 0,
      },
    });
    if (req.ok) {
      const res = await req.json();
      return {
        data: res?.data,
        total: res?.meta?.total,
      };
    } else {
      throw new Error();
    }
  } catch (error) {
    return "Error";
  }
};
