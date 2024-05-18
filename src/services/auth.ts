import { baseURL } from "./news";

export const createNewUser = async ({ data }: { data: any }) => {
  try {
    const req = await fetch(`${baseURL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();

    return { data: res, status: req.status, ok: req.ok };
  } catch (error) {
    return "Error";
  }
};
export const loginUser = async ({
  data,
}: {
  data: {
    mobile: string;
    password: string;
  };
}) => {
  try {
    const req = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();

    return { data: res, status: req.status, ok: req.ok };
  } catch (error) {
    return "Error";
  }
};
