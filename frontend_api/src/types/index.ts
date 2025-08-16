import {z} from 'zod';
import type {responseFindAllCategoriasSchema} from "../schemas/CategoriasSchemas.ts";

export type FormSaveProducto = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
}
export type ProductoToSave = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
    disponible: number
}

export type Categoria = z.infer<typeof responseFindAllCategoriasSchema>
