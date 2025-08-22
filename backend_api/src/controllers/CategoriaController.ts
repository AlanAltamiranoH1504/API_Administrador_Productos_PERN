import Categoria from "../models/Categoria";

const findAll = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();

        return res.status(200).json(categorias);
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error en listado de categorias",
            error: e.message
        });
    }
}

const findById = async (req, res) => {
    try {
        const categoriaToShow = await Categoria.findByPk(req.params.id);
        return res.status(200).json(categoriaToShow);
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error en busqueda de categoria",
            error: e.message
        });
    }
}

const save = async (req, res) => {
    try {
        const categoriaToSave = await Categoria.create({
            nombre: req.body.nombre
        });
        return res.status(201).json({
            status: true,
            message: "Categoria creada correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error en creación de categoria",
            error: e.message
        });
    }
}

const update = async (req, res) => {
    try {
        const categoriaToUpdate = await Categoria.findByPk(req.params.id);
        categoriaToUpdate.nombre = req.body.nombre;
        await categoriaToUpdate.save();

        return res.status(200).json({
            status: true,
            message: "Categoria actualizada correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error en actualizacion de categoria",
            error: e.message
        });
    }
}

const destroy = async (req, res) => {
    try {
        const categoriaToDelete = await Categoria.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({
            status: true,
            message: "Categoria eliminada correctamente"
        })
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error al eliminar categoria",
            error: e.message
        });
    }
}

export {
    save,
    findAll,
    findById,
    update,
    destroy
}