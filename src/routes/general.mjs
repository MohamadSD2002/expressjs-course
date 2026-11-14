import express from "express";
import { about, home } from "../controllers/general.mjs";

const router = express.Router();

router.get("/", home);

router.get("/about", about);

export default router;
