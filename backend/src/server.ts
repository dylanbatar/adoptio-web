import express from "express";
import routes from "./router";

const app = express();

app.use(routes);

export default app;
