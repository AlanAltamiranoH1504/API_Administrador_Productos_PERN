import {body, param, validationResult} from "express-validator";

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