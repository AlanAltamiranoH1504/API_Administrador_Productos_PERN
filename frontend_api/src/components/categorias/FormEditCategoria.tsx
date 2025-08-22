import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {findCategoriaByIdGET, updateCategoriaPUT} from "../../services/CategoriasService.ts";
import type {CategoriaToUpdate, FormSaveCategoria} from "../../types";
import {toast} from "react-toastify";

const FormEditCategoria = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormSaveCategoria>()
    const {data, isLoading, isError} = useQuery({
        queryKey: ["findCategoriaById"],
        queryFn: () => findCategoriaByIdGET(Number(id)),
        retry: false,
        refetchOnWindowFocus: false
    });

    function updateCategoria(data: FormSaveCategoria) {
        const dataWithID: CategoriaToUpdate = {
            nombre: data.nombre,
            id: Number(id)
        }
        updateCategoriaMutation.mutate(dataWithID);
    }

    const updateCategoriaMutation = useMutation({
        mutationKey: ["updateCategoria"],
        mutationFn: updateCategoriaPUT,
        onSuccess: () => {
            toast.success("Categoria actualizada correctamente");
            navigate("/categorias");
        },
        onError: (error) => {
            // @ts-ignore
            toast.error(error.response.data.message);
        }
    })

    useEffect(() => {
        reset({
            nombre: data?.nombre
        });
    }, [data])

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Ourrio un error</div>;
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(updateCategoria)}
                className="bg-gray-100 shadow-md rounded-lg space-y-5 px-5 py-10">
                <h2 className="font-bold text-slate-900 text-center text-3xl uppercase">Editar Categoria</h2>
                <div className="mb-5">
                    <label htmlFor="nombre" className="text-slate-900 uppercase font-bold mb-2 block">Nombre:</label>
                    <input type="text" className="border p-2 rounded-lg shadow-md w-full"
                           placeholder="Nombre de la categoria"
                           {...register("nombre", {
                               required: "El nombre es obligatorio"
                           })}
                    />
                    <div className="bg-red-100 text-red-600 text-center font-bold mt-2 rounded-md">
                        {errors.nombre && String(errors.nombre.message)}
                    </div>
                </div>
                <input type="submit"
                       value="Actualizar Categoria"
                       className="p-2 border rounded-lg w-full font-bold uppercase cursor-pointer bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-500"/>
            </form>
        </>
    );
}
export default FormEditCategoria;