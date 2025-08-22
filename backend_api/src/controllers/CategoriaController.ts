import Categoria from "../models/Categoria";

const findAll = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        // if (!categorias) {
        //     return  res.status(404).json({
        //         status: false,
        //         message: "Categorias no existentes"
        //     });
        // }

        return res.status(200).json(categorias);
    } catch (e) {
        return res.status(500).json({
            status: false,
            message: "Error en listado de categorias",
            error: e.message
        });
    }
}
export {
    findAll
}