import { Request, Response } from "express";
import fs from "fs"
import path from "path"

const getKittens = (req: Request, res: Response) => {
    const filePath = path.resolve(__dirname, "../data/kittens.json")
    const file = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(file))
}

export { getKittens };