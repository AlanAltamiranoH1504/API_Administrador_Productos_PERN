import express from "express";
import {
    accionPrueba,
    deleteProducto, findById,
    listProductos,
    saveProducto,
    updateProducto
} from "../controllers/ProductoController";
import {
    CreateProductoRequest,
    DeleteProductoRequest,
    FindByIdProductoRequest,
    UpdateProductoRequest
} from "../validators/ProductoValidators";

const router = express.Router();
router.get("/prueba", accionPrueba);
router.get("", listProductos);
router.get("/:id", FindByIdProductoRequest, findById);
router.post("", CreateProductoRequest, saveProducto);
router.put("/:id", UpdateProductoRequest, updateProducto);
router.delete("/:id", DeleteProductoRequest, deleteProducto);

export default router;