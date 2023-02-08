import { Router } from "express";
import { getKittens } from "../controllers/kittens.controller"

const router = Router();

router.get("/", getKittens);

export default router;