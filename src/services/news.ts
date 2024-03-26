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
