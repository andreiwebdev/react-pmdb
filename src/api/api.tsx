import axios from "axios";

export const fetchMovies = async () => {
  try {
    const resp = await axios.get("./json/movies.json");
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
