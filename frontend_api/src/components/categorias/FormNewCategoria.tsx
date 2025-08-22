import {useForm} from "react-hook-form";
import type {FormSaveCategoria} from "../../types";
import {useMutation} from "@tanstack/react-query";
import {saveCategoriaPOST} from "../../services/CategoriasService.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const FormNewCategoria = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormSaveCategoria>();
    const navigate = useNavigate();

    function saveCategoria(data: FormSaveCategoria) {
        saveCategoriaMutation.mutate(data);
    }

    const saveCategoriaMutation = useMutation({
        mutationKey: ["saveCategoria"],
        mutationFn: saveCategoriaPOST,
        onSuccess: () => {
            toast.success("Categoria creada correctamente!");
            navigate("/categorias");
        },
        onError: (error) => {
            // @ts-ignore
            toast.error(error.response.data.message);
        }
    })

    return (
        <>
            <form
                onSubmit={handleSubmit(saveCategoria)}
                className="bg-gray-100 shadow-md rounded-lg space-y-5 px-5 py-10">
                <h2 className="font-bold text-slate-900 text-center text-3xl uppercase">Agregar Categoria</h2>
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
                       value="Agregar Categoria"
                       className="p-2 border rounded-lg w-full font-bold uppercase cursor-pointer bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-500"/>
            </form>
        </>
    );
}
export default FormNewCategoria;