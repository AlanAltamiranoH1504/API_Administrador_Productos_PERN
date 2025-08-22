import {body, param, validationResult} from "express-validator";
import Categoria from "../models/Categoria";

const ShowCategoriaRequest = [
    param("id")
        .notEmpty().withMessage("El id de la categoria es obligatorio")
        .isNumeric().withMessage("El id de la categoria debe ser un numero entero")
        .custom(value => value > 0).withMessage("El id de la categoria debe ser un numero mayor a 0"),

    async (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                status: false,
                message: "Error en cuerpo de peticion",
                errores: errores
            });
        }

        const categoriaToUpdate = await Categoria.findByPk(req.params.id);
        if (!categoriaToUpdate) {
            return res.status(404).json({
                status: false,
                message: "Categoria no encontrada"
            });
        }
        next();
    }
]

const CreateCategoriaRequest = [
    body("nombre")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .isLength({min: 3, max: 255}).withMessage("El nombre debe tener una longitud de entre 3 y 255 caracteres"),

    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                status: false,
                message: "Error en cuerpo de peticion",
                errores: errores
            });
        }
        next();
    }
];

const UpdateCategoriaRequest = [
    param("id")
        .notEmpty().withMessage("El id de la categoria es obligatorio")
        .isNumeric().withMessage("El id de la categoria debe ser un numero entero")
        .custom(value => value > 0).withMessage("El id de la categoria debe ser un numero mayor a 0"),
    body("nombre")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .isLength({min: 3, max: 255}).withMessage("El nombre debe tener una longitud de entre 3 y 255 caracteres"),

    async (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(409).json({
                status: false,
                message: "Error en cuerpo de peticion",
                errores: errores
            });
        }

        const categoriaToUpdate = await Categoria.findByPk(req.params.id);
        if (!categoriaToUpdate) {
            return res.status(404).json({
                status: false,
                message: "Categoria no encontrada"
            });
        }
        next();
    }
]

export {
    CreateCategoriaRequest,
    UpdateCategoriaRequest,
    ShowCategoriaRequest
}