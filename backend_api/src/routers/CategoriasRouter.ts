import express from "express";
import {destroy, findAll, findById, save, update} from "../controllers/CategoriaController";
import {CreateCategoriaRequest, ShowCategoriaRequest, UpdateCategoriaRequest} from "../validators/CategoriasValidators";
const router = express.Router();

router.get("", findAll);
router.get("/:id", ShowCategoriaRequest, findById);
router.post("", CreateCategoriaRequest, save);
router.put("/:id", UpdateCategoriaRequest, update);
router.delete("/:id", ShowCategoriaRequest, destroy);

export default router;