import {Link} from "react-router-dom";

const ProductosView = () => {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-700">Productos</h2>

                <Link
                    className="rounded-lg bg-slate-800 p-3 text-sm font-bold text-white uppercase shadow-md hover:bg-slate-700 transition-colors duration-500 cursor-pointer"
                    to="/productos/nuevo">Agregar Producto</Link>
            </div>
        </>
    );
}
export default ProductosView;