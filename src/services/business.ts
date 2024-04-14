import {singleBusiness} from "@/models/business";
import {baseURL} from "./news";

export const getBusinessPointsFromLocation = async (lat:any,lng:any) => {
    try {
        const req = await fetch(`${baseURL}/search/map?lat=34.63935180663382&long=50.878894309208384&radius=30`);
        return req.json();
    } catch (error) {
        return [];
    }
}

export const getTopBusiness = async (): Promise<singleBusiness[]> => {
    try {
        const req = await fetch(`${baseURL}/shop/top`, {
            next: {
                revalidate: 60,
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
    data: {
        id: number;
        name: string;
        desc: string;
    };
    statusCode: number;
}
    | "Error"
> => {
    try {
        const req = await fetch(`${baseURL}/shop/${id}`, {
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
                    desc: "",
                    id: 0,
                    name: "",
                },
                statusCode: req.status,
            };
        }
    } catch (error) {
        return "Error";
    }
};
