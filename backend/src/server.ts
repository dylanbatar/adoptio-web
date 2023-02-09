import express from "express";
import cors from "cors";
import routes from "./router";

const app = express();

app.use(cors({ origin: true }));
app.use(routes);

export default app;
