import { api } from "./api";

export const getTrends = async () => {
  try {
    const response = await api.get("/trends");

    return response;
  } catch (error) {
    console.error(error);
  }
};
