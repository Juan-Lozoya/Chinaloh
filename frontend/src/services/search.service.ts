import { api } from "./api";

export const searchMovie = async (data: string) => {
  try {
    const response = await api.post("/search", { search: data });

    return response;
  } catch (error) {
    console.error(error);
  }
};
