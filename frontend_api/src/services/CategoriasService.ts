import axios from "axios";
import {responseFindAllCategoriasSchema} from "../schemas/CategoriasSchemas.ts";

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