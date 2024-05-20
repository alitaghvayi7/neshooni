import { baseURL } from "./news";

export const searchQuery = async ({
  query,
}: {
  query: string;
}): Promise<
  | {
      data: any;
      total: number;
    }
  | "Error"
> => {
  try {
    const req = await fetch(`${baseURL}/search?search_term=${query}`, {
      next: {
        revalidate: 0,
      },
    });
    //   const req = await fetch(`${baseURL}/search?type=shop&search_term=${query}`);
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
