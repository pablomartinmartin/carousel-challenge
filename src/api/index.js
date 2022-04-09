import axios from "axios";

const BASE_PATH = "https://qa-dubbz.com/api/v1/public";

export const getGamesCatalog = async () => {
  const { data } = await axios.get(`${BASE_PATH}/games`);

  return data;
};
