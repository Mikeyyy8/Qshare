import express from "express"
import { shareFile, retrieveFile } from "../controllers/share.controller.js"

const router = express.Router()

router.post("/", shareFile)
router.get("/:id", retrieveFile)

export default router 