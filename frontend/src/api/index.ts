import axios from "axios";

const { HOST_API } = process.env;

export const petApi = axios.create({ baseURL: HOST_API || "http://localhost:3001" });
