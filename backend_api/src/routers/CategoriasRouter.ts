import express from "express";
import {findAll} from "../controllers/CategoriaController";
const router = express.Router();

router.get("", findAll);

export default router;