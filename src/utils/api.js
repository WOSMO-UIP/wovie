import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_WOVIES_TMDB_TOKEN; // this line didnt work so i just made api call in that way 
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzgzOTVlNzlkZWJiOGU4MTg3YTkwNDg0YzM4Y2I4MiIsInN1YiI6IjY0ZTA1YjJhZTE5ZGU5MDExZDVlMmUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vCMmBSsLFfsVxcn7R69nXvlj3rFf0x_C4Ypckbuvh_U";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
