import axios from "axios";
import {
    responseFindAllCategoriasSchema,
    responseFindCategoriaByIdSchema,
    responseUpdateCategoriaByIdSchema
} from "../schemas/CategoriasSchemas.ts";
import type {CategoriaToUpdate, FormSaveCategoria} from "../types";

export async function findAllCategoriasGET() {
    try {
        const url = `http://localhost:3000/categorias`;
        const responseAPI = await axios.get(url);
        const resultAPI = responseFindAllCategoriasSchema.safeParse(responseAPI.data);
        if (resultAPI.success) {
            return resultAPI.data;
        }
    } catch (e) {
        throw e;
    }
}

export async function findCategoriaByIdGET(id: number) {
    try {
        const url = `http://localhost:3000/categorias/${id}`;
        const responseAPI = await axios.get(url);
        const resultAPI = responseFindCategoriaByIdSchema.safeParse(responseAPI.data);
        if (resultAPI.success) {
            return resultAPI.data;
        }
    } catch (e) {
        throw e;
    }
}

export async function updateCategoriaPUT(data: CategoriaToUpdate) {
    try {
        const url = `http://localhost:3000/categorias/${data.id}`;
        const responseAPI = await axios.put(url, data);
        const resultAPI = responseUpdateCategoriaByIdSchema.safeParse(responseAPI.data);
        if (!resultAPI.success) {
            console.log("Error en actualizacion");
        }
    } catch (e) {
        throw e;
    }
}

export async function saveCategoriaPOST(data: FormSaveCategoria) {
    try {
        const url = `http://localhost:3000/categorias`;
        const responseAPI = await axios.post(url, data);
        if (responseAPI.status === 200) {
            console.log("Categoria guardada");
        }
    } catch (e) {
        throw e;
    }
}

export async function deleteCategoriaDELETE(id: number) {
    try {
        const url = `http://localhost:3000/categorias/${id}`;
        await axios.delete(url);
    } catch (e) {
        throw e;
    }
}