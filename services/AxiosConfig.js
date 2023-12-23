import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:5265/api/"
})

export default Axios;
