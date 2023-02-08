import dotenv from "dotenv";
dotenv.config();

import server from "./server";

const { PORT } = process.env;

server.listen(PORT, () => console.info(`Running on port:${PORT}`));
