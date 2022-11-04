import axios from "axios";

// axios instance create
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
