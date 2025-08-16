import {useMutation, useQuery} from "@tanstack/react-query";
import {findAllCategoriasGET} from "../../services/CategoriasService.ts";
import {useForm} from "react-hook-form";
import type {FormSaveProducto, ProductoToSave} from "../../types";
import {saveProductoPOST} from "../../services/ProductosService.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const FormNuevoProducto = () => {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useQuery({
        queryKey: ["findAllCategorias"],
        queryFn: () => findAllCategoriasGET(),
        refetchOnWindowFocus: false,
        retry: true,
    });
    const {register, handleSubmit, formState: {errors}} = useForm<FormSaveProducto>();

    function guardarProducto(data: FormSaveProducto) {
        const dataWithDisponible: ProductoToSave = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            categoriaId: data.categoriaId,
            disponible: 1
        };
        saveProductoMutation.mutate(dataWithDisponible);
    }

    const saveProductoMutation = useMutation({
        mutationKey: ["saveProducto"],
        mutationFn: saveProductoPOST,
        onSuccess: () => {
            toast.success("Producto agregado correctamente");
            navigate("/productos");
        },
        onError: (error) => {
            // @ts-ignore
            toast.error(error.response.data.message)
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error en listado de categorias...</div>;
    }

    if (data) return (
        <>
            <form
                onSubmit={handleSubmit(guardarProducto)}
                className="bg-gray-100 shadow-md rounded-lg space-y-5 px-5 py-10">
                <h2 className="font-bold text-slate-900 text-center text-3xl uppercase">Agrega un nuevo producto</h2>
                <div className="mb-5">
                    <label htmlFor="nombre" className="text-slate-900 uppercase font-bold mb-2 block">Nombre:</label>
                    <input type="text" className="border p-2 rounded-lg shadow-md w-full"
                           placeholder="Nombre del producto"
                           {...register("nombre", {
                               required: "El nombre es obligatorio"
                           })}
                    />
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.nombre && String(errors.nombre.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="descripcion"
                           className="text-slate-900 uppercase font-bold mb-2 block">Descripción:</label>
                    <textarea className="border p-2 rounded-lg shadow-md w-full" placeholder="Descripción de producto"
                              rows={8}
                              {...register("descripcion", {
                                  required: "La descripcion es obligatoria"
                              })}
                    ></textarea>

                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.descripcion && String(errors.descripcion.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="precio" className="text-slate-900 uppercase font-bold mb-2 block">Precio:</label>
                    <input type="number" className="border p-2 rounded-lg shadow-md w-full"
                           placeholder="Precio del producto"
                           {...register("precio", {
                               required: "El precio es obligatorio",
                               min: {
                                   value: 1,
                                   message: "El precio minimo es $1.00"
                               }
                           })}
                    />
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.precio && String(errors.precio.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="categoria"
                           className="text-slate-900 uppercase font-bold mb-2 block">Categoria:</label>
                    <select
                        className="p-2 border w-full rounded-lg shadow-md"
                        {...register("categoriaId", {
                            required: "La categoria es obligatoria"
                        })}
                    >
                        <option value="">--- Selecciona una categoria ---</option>
                        {data.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                        ))}
                    </select>
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.categoriaId && String(errors.categoriaId.message)}
                    </div>
                </div>

                <input type="submit"
                       value="Agregar Producto"
                       className="p-2 border rounded-lg w-full font-bold uppercase cursor-pointer bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-500"/>
            </form>
        </>
    );
}
export default FormNuevoProducto;