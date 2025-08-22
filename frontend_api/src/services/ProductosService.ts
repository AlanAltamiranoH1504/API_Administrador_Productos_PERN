import axios from 'axios';
import type {ProductoToSave, ProductoToUpdate} from "../types";
import {responseFindAllProductosSchema, responseFindProductoByIdSchema} from "../schemas/ProductosSchemas.ts";

export async function saveProductoPOST(data: ProductoToSave) {
    try {
        const url = `http://localhost:3000/productos`;
        const responseAPI = await axios.post(url, data);
        if (responseAPI.status === 201) {
            console.log("");
        }
    } catch (e) {
        throw e;
    }
}

export async function findAllProductosGET() {
    try {
        const url = `http://localhost:3000/productos`;
        const responseAPI = await axios.get(url);
        const resultAPI = responseFindAllProductosSchema.safeParse(responseAPI.data);
        if (resultAPI.success) {
            return resultAPI.data;
        }
    } catch (e) {
        throw e;
    }
}

export async function findByIdProductoGET(id: number) {
    try {
        const url = `http://localhost:3000/productos/${id}`;
        const responseAPI = await axios.get(url);
        const resultAPI = responseFindProductoByIdSchema.safeParse(responseAPI.data);
        if (resultAPI.success) {
            return resultAPI.data;
        }
    } catch (e) {
        throw e;
    }
}

export async function updateProductoPUT(data: ProductoToUpdate) {
    try {
        const estadoDiponible = data.disponible == 1 ? true : false;
        const dataNew = {
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            categoriaId: data.categoriaId,
            disponible: estadoDiponible
        }
        const url = `http://localhost:3000/productos/${data.id}`;
        const responseAPI = await axios.put(url, dataNew);
        if (responseAPI.status === 200) {
            console.log("");
        }
    } catch (e) {
        throw e;
    }
}

// @ts-ignore
export async function updateDisponibilidadPUT(data) {
    try {
        const url = `http://localhost:3000/productos/status/${data}`;
        await axios.put(url, {id: data});
    } catch (e) {
        throw e;
    }
}

export async function deleteProductoDELETE(id: number) {
    try {
        const url = `http://localhost:3000/productos/${id}`;
        const responseAPI = await axios.delete(url);
        console.log(responseAPI.status)
    } catch (e) {
        throw e;
    }
}