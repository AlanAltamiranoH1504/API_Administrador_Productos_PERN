import axios from 'axios';
import type {ProductoToSave} from "../types";
import {responseFindAllProductosSchema} from "../schemas/ProductosSchemas.ts";

export async function saveProductoPOST(data: ProductoToSave) {
    try {
        const url = `http://localhost:3000/productos`;
        const responseAPI = await axios.post(url, data);
        if (responseAPI.status === 201) {
            console.log("Productos saved successfully.");
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
    } catch (e) {
        throw e;
    }
}

export async function deleteProductoDELETE(id: number) {
    try {
        const url = `http://localhost:3000/productos/${id}`;
        const responseAPI = await axios.delete(url);
    } catch (e) {
        throw e;
    }
}