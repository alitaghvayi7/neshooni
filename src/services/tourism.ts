import { SingleTourism, singleTourismCard } from "@/models/tourism";
import { baseURL } from "./news";

export const getTopPlaces = async (): Promise<singleTourismCard[]> => {
  try {
    const req = await fetch(`${baseURL}/tourism/top`, {
      next: {
        revalidate: 60,
      },
    });
    return req.json();
  } catch (error) {
    return [];
  }
};

export const getSingleTourism = async ({
  id,
}: {
  id: string;
}): Promise<
  | {
      data: {
        id: number;
        title: string;
        content: string;
        img: string | null;
        average_score: [
          {
            scorable_id: number;
            scorable_type: "App\\Modules\\Tourism\\Models\\Tourism";
            average_score: string | null;
          },
        ];
        comments_count: number;
      };
      statusCode: number;
    }
  | "Error"
> => {
  try {
    const req = await fetch(`${baseURL}/tourism/${id}`, {
      next: {
        revalidate: 60,
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
      return "Error";
    }
  } catch (error) {
    return "Error";
  }
};

export const getTourismList = async ({
  page,
}: {
  page: number;
}): Promise<
  | {
      data: SingleTourism[];
      total: number;
    }
  | "Error"
> => {
  try {
    const req = await fetch(`${baseURL}/tourism?page=${page}`);
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
