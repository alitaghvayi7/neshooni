import { singleTourismCard } from "@/models/tourism";
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
      return {
        data: {
          content: "",
          id: 0,
          title: "",
        },
        statusCode: req.status,
      };
    }
  } catch (error) {
    return "Error";
  }
};
