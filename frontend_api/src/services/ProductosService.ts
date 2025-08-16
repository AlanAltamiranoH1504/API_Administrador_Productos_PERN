import axios from 'axios';
import type {ProductoToSave} from "../types";

export async function saveProductoPOST(data: ProductoToSave) {
    try {
        const url = `http://localhost:3000/productos`;
        const responseAPI = await axios.post(url, data);
        if (responseAPI.status === 201) {
            console.log("Productos saved successfully.");
        }
    }catch (e) {
        throw e;
    }
}