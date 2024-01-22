const baseURL = `${process.env.BACKEND_URL}/${process.env.BACKEND_VERSION}`
export const getAllNews = async ():Promise<ListNews> => {
    const response = await fetch(`${baseURL}/news`);
    return await response.json();
}