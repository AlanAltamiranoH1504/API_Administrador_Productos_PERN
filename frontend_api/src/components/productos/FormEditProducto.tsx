import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {findByIdProductoGET, updateProductoPUT} from "../../services/ProductosService.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import type {FormUpdateProducto, ProductoToUpdate} from "../../types";
import {findAllCategoriasGET} from "../../services/CategoriasService.ts";
import {toast} from "react-toastify";

const FormEditProducto = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormUpdateProducto>()
    const {data} = useQuery({
        queryKey: ["findProductoById"],
        queryFn: () => findByIdProductoGET(Number(id)),
        retry: false,
        refetchOnWindowFocus: false
    });
    const {data: dataCategorias, isLoading: isLoadingCategorias} = useQuery({
        queryKey: ["findAllCategorias"],
        queryFn: () => findAllCategoriasGET(),
        refetchOnWindowFocus: false,
        retry: true,
    });

    function actualizarProducto(data: FormUpdateProducto) {
        const dataWithId: ProductoToUpdate = {
            id: Number(id),
            nombre: data.nombre,
            categoriaId: data.categoriaId,
            descripcion: data.descripcion,
            precio: data.precio,
            disponible: data.disponibilidad
        }
        updateProductoMutation.mutate(dataWithId);
    }

    const updateProductoMutation = useMutation({
        mutationKey: ["updateProductoById"],
        mutationFn: updateProductoPUT,
        onSuccess: () => {
            toast.success("Producto actualizado correctamente");
            navigate("/productos");
        },
        onError: (error) => {
            // @ts-ignore
            toast.error(error.response.data.error);
        }
    })

    useEffect(() => {
        reset({
            nombre: data?.nombre,
            descripcion: data?.descripcion,
            precio: Number(data?.precio),
            categoriaId: data?.categoriaId,
            disponibilidad: Number(data?.disponible)
        })
    }, [data])

    return (
        <>
            <form
                onSubmit={handleSubmit(actualizarProducto)}
                className="bg-gray-100 shadow-md rounded-lg space-y-5 px-5 py-10">
                <h2 className="font-bold text-slate-900 text-center text-3xl uppercase">Editar Producto</h2>
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
                               required: "El precio es obligatorio"
                           })}
                    />
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.precio && String(errors.precio.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="categoria"
                           className="text-slate-900 uppercase font-bold mb-2 block">Categoria:</label>
                    {isLoadingCategorias ? (
                        <p>Cargando categorías...</p>
                    ) : (
                        <select
                            {...register("categoriaId", {
                                required: "La categoria es obligatoria"
                            })}
                            className="p-2 border w-full rounded-lg shadow-md">
                            <option value="">--- Selecciona una categoria ---</option>
                            {dataCategorias?.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                    )}
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.categoriaId && String(errors.categoriaId.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="disponibilidad"
                           className="text-slate-900 uppercase font-bold mb-2 block">Disponibilidad:</label>

                    <select
                        {...register("disponibilidad", {
                            required: "La disponibilidad es obliigatoria"
                        })}
                        className="p-2 border w-full rounded-lg shadow-md">
                        <option value="">--- Selecciona una Disponibilidad ---</option>
                        <option value="1">Disponible</option>
                        <option value="0">No Disponible</option>
                    </select>
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.disponibilidad && String(errors.disponibilidad.message)}
                    </div>
                </div>

                <input type="submit"
                       value="Actualizar Producto"
                       className="p-2 border rounded-lg w-full font-bold uppercase cursor-pointer bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-500"/>
            </form>
        </>
    );
}
export default FormEditProducto;