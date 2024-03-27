export const baseURL = `${process.env.BACKEND_URL}/${process.env.BACKEND_VERSION}`;
export const getAllNews = async (): Promise<ListNews | []> => {
  try {
    const response = await fetch(`${baseURL}/news`, {
      next: {
        revalidate: 0,
      },
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
export const getSingleNews = async ({ id }: { id: string }): Promise<{ data: SingleNews } | "Error"> => {
  try {
    const response = await fetch(`${baseURL}/news/${id}`, {
      next: {
        revalidate: 0,
      },
    });
    return {
      data: { ...(await response.json()).data },
    };
  } catch (error) {
    return "Error";
  }
};
