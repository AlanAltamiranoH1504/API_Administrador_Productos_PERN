import {body, param, validationResult} from "express-validator";
import Categoria from "../models/Categoria";

const FindByIdProductoRequest = [
    param("id")
        .notEmpty().withMessage("El id del producto es obligatorio")
        .isInt({min: 1}).withMessage("El id del producto debe ser un numero entero mayor a 0"),

    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(404).json({
                errores: errores.array()
            });
        }
        next();
    }
];

const CreateProductoRequest = [
    body("nombre")
        .notEmpty().withMessage("El nombre del producto es obligatorio"),
    body("descripcion")
        .notEmpty().withMessage("La descripcion del producto es obligatoria"),
    body("precio")
        .notEmpty().withMessage("El precio del producto es obligatoria")
        .isFloat({min: 1}).withMessage("El precio del producto debe ser minimo de $1.00"),
    body("disponible")
        .notEmpty().withMessage("El estado de creacion de un producto debe ser disponible"),
    body("categoriaId")
        .notEmpty().withMessage("La categoria del producto es obligatoria")
        .isInt({min: 1}).withMessage("El id de la categoria debe ser un numero mayor a 0"),

    //Busqueda de categoria

    async (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                errores: errores.array()
            });
        }
        const categoriaToFind = await Categoria.findByPk(req.body.categoriaId);
        if (!categoriaToFind) {
            return res.status(404).json({
                status: false,
                message: "Categoria no existente"
            });
        }
        next();

    }
];

const UpdateProductoRequest = [
    param("id")
        .notEmpty().withMessage("El id del producto es obligatorio")
        .isInt().withMessage("El id del producto debe ser un numero entero")
        .custom(value => value > 0).withMessage("El id del producto debe ser mayor a 0"),
    body("nombre")
        .notEmpty().withMessage("El nombre del producto es obligatorio"),
    body("descripcion")
        .notEmpty().withMessage("La descripcion del producto es obligatoria"),
    body("precio")
        .notEmpty().withMessage("El precio del producto es obligatoria")
        .isFloat({min: 1}).withMessage("El precio del producto debe ser minimo de $1.00"),
    body("disponible")
        .notEmpty().withMessage("El estado de creacion de un producto debe ser disponible"),
    body("categoriaId")
        .notEmpty().withMessage("La categoria del producto es obligatoria")
        .isInt({min: 1}).withMessage("El id de la categoria debe ser un numero mayor a 0"),

    async (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                errores: errores.array()
            });
        }

        const categoriaToFind = await Categoria.findByPk(req.body.categoriaId);
        if (!categoriaToFind) {
            return res.status(404).json({
                status: false,
                message: "Categoria no existente"
            });
        }
        next();
    }
];

const DeleteProductoRequest = [
    param("id")
        .notEmpty().withMessage("El id del producto es obligatorio")
        .isInt({min: 1}).withMessage("El id del producto no puede ser menor a 1"),

    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                errores: errores.array()
            });
        }
        next();
    }
];

export {
    CreateProductoRequest,
    FindByIdProductoRequest,
    UpdateProductoRequest,
    DeleteProductoRequest
}