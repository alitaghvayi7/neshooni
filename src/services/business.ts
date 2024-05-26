import { SingleBusiness, businessSlider } from "@/models/business";
import { baseURL } from "./news";

export const getBusinessPointsFromLocation = async (lat: any, lng: any) => {
  try {
    const [businessReq, tourismReq] = await Promise.all([
      fetch(`${baseURL}/search/map?lat=${lat}&long=${lng}&radius=30&type=shop`, {
        next: {
          revalidate: 0,
        },
      }),
      fetch(`${baseURL}/search/map?lat=${lat}&long=${lng}&radius=30&type=tourism`, {
        next: {
          revalidate: 0,
        },
      }),
    ]);
    if (businessReq.ok && tourismReq.ok) {
      return {
        data: {
          business: (await businessReq.json()).data,
          tourist: (await tourismReq.json()).data,
          status: businessReq.status,
        },
      };
    } else {
      return {
        data: {
          business: [],
          tourist: [],
          status: businessReq.status,
        },
      };
    }
  } catch (error) {
    return {
      data: {
        business: [],
        tourist: [],
        status: 500,
      },
    };
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
