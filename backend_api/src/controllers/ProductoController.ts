import Producto from "../models/Producto";
import producto from "../models/Producto";

const accionPrueba = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Funcionando controlador de productos"
    });
}

const listProductos = async (req, res) => {
    try {
        const productosToList = await Producto.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});
        if (productosToList.length <= 0) {
            return res.status(404).json({
                status: false,
                message: "No hay productos disponibles"
            });
        }

        return res.status(200).json({
            status: true,
            total: productosToList.length,
            productos: productosToList
        });
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Ocurrio un error en el listado de productos",
            error: e.message
        });
    }
}

const findById = async (req, res) => {
    try {
        const productoToShow = await Producto.findByPk(req.params.id, {
            attributes: {exclude: ["createdAt", "updatedAt"]}
        });
        if (!productoToShow) {
            return res.status(404).json({
                status: false,
                message: "Producto no encontrado"
            });
        }
        return res.status(200).json(productoToShow);
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Ocurrio un error en la busqueda del producto",
            error: e.message
        });
    }
}

const saveProducto = async (req, res) => {
    const {nombre, descripcion, precio} = req.body;
    try {
        const productoToSave = await Producto.create({
            nombre,
            descripcion,
            precio,
            disponible: true
        });

        return res.status(201).json({
            status: true,
            message: "Producto creado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Ocurrio un error en la creacion del producto",
            error: e.message
        });
    }
}

const updateProducto = async (req, res) => {
    try {
        const {nombre, descripcion, precio, disponible} = req.body;
        const productoToUpdate = await Producto.findByPk(req.params.id);
        if (!productoToUpdate) {
            return res.status(404).json({
                status: false,
                message: "Producto no encontrado"
            });
        }
        await productoToUpdate.update({
            nombre,
            descripcion,
            precio,
            disponible
        });

        return res.status(200).json({
            status: true,
            message: "Producto actualizado correctamente"
        });

    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Ocurrio un error en la actualizacion del producto",
            error: e.message
        });
    }
}

const deleteProducto = async (req, res) => {
    try {
        const productoToDelete = await Producto.findByPk(req.params.id);
        if (!productoToDelete) {
            return res.status(404).json({
                status: false,
                message: "Producto no encontrado"
            });
        }
        await productoToDelete.destroy();
        return res.status(200).json({
            status: true,
            message: "Producto eliminado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Ocurrio un error en la eliminacion del producto",
            error: e.message
        });
    }
}

export {
    accionPrueba,
    listProductos,
    findById,
    saveProducto,
    updateProducto,
    deleteProducto
}