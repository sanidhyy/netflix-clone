import axios from "axios";

const instance = axios.create({
  baseURL: "/api/tmdb",
});

export default instance;
