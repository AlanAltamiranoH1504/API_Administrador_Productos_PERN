import {Link} from "react-router-dom";
import FormNuevoProducto from "../../components/productos/FormNuevoProducto.tsx";

const NuevoProductoView = () => {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-700">Agregar Nuevo Producto</h2>
                <Link
                    className="rounded-lg bg-slate-800 p-3 text-sm font-bold text-white uppercase shadow-md hover:bg-slate-700 transition-colors duration-500 cursor-pointer"
                    to="/productos">Listado Productos</Link>
            </div>
            <div className="my-10 max-w-3xl mx-auto">
                <FormNuevoProducto/>
            </div>
        </>
    );
}
export default NuevoProductoView;