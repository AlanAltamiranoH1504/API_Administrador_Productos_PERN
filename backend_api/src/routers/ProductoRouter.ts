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

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El id del producto
 *           example: 1
 *         nombre:
 *           type: string
 *           description: La descripción del producto
 *           example: Alexa Echo Dot 5
 *         precio:
 *           type: number
 *           description: Precio del producto
 *           example: 1500
 *         disponible:
 *           type: boolean
 *           description: Estado del producto
 *           example: true
 *         categoriaId:
 *           type: number
 *           descripcion: Foreign Key hacia la tabla Categorias
 *           example: 1
 */

/**
 * @swagger
 * /productos:
 *      get:
 *          sumary: Obtiene una lista de productos
 *          tags:
 *              - Productos
 *          description: Retorna una lista de productos
 *          responses:
 *              200:
 *                  description: Respuesta correcta
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Producto'
 *              404:
 *                  description: Productos no encontrados
 *
 */


const router = express.Router();
router.get("/prueba", accionPrueba);
router.get("", listProductos);
router.get("/:id", FindByIdProductoRequest, findById);
router.post("", CreateProductoRequest, saveProducto);
router.put("/:id", UpdateProductoRequest, updateProducto);
router.delete("/:id", DeleteProductoRequest, deleteProducto);

// @ts-ignore
export default router;