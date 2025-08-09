import express from "express";
import {accionPrueba} from "../controllers/PruebaController";

const router = express.Router();
router.get("/prueba", accionPrueba);

export default router;