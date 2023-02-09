import axios from "axios";

export const petApi = axios.create({ baseURL: "https://adoptio-web-production.up.railway.app/" });
