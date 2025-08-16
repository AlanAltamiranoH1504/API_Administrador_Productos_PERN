import {z} from "zod";

const responseSaveProductoAPI = z.object({
    status: z.boolean(),
    message: z.string()
});

export {
    responseSaveProductoAPI
}