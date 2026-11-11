import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https//ai-project-api.moviehub.io.vn",
    timeout: 1000,
});

export default axiosClient;