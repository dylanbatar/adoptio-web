import { Router } from "express";
import kittensRouter from "./kittens.router";

const router = Router();

router.use("/kittens", kittensRouter);

export default router