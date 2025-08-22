import {z} from 'zod';
import type {responseFindAllCategoriasSchema} from "../schemas/CategoriasSchemas.ts";
import type {responseFindAllProductosSchema} from "../schemas/ProductosSchemas.ts";

export type FormSaveProducto = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
}

export type FormUpdateProducto = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
    disponibilidad: number;
}

export type ProductoToSave = {
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
    disponible: number
}

export type ProductoToUpdate = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoriaId: number;
    disponible: number
}

export type Categoria = z.infer<typeof responseFindAllCategoriasSchema>
export type ProductosResponse = z.infer<typeof responseFindAllProductosSchema>
