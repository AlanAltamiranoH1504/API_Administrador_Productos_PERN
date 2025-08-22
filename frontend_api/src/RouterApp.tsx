import {BrowserRouter, Routes, Route} from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp.tsx";
import ProductosView from "./views/productos/Productos.tsx";
import NuevoProductoView from "./views/productos/NuevoProductoView.tsx";
import EditProductoView from "./views/productos/EditProductoView.tsx";
import LayoutCategorias from "./layouts/LayoutCategorias.tsx";
import Categorias from "./views/categorias/Categorias.tsx";
import NewCategoriaView from "./views/categorias/NewCategoriaView.tsx";
const RouterApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<LayoutApp/>}>
                        <Route path="/productos" element={<ProductosView/>}></Route>
                        <Route path="/productos/nuevo" element={<NuevoProductoView/>}></Route>
                        <Route path="/productos/edit/:id" element={<EditProductoView/>}></Route>
                    </Route>

                    <Route element={<LayoutCategorias/>}>
                        <Route path="/categorias" element={<Categorias/>}></Route>
                        <Route path="/categorias/nuevo" element={<NewCategoriaView/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default RouterApp;