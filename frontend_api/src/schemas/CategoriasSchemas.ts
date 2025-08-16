import {z} from "zod";
const responseFindAllCategoriasSchema = z.array(
    z.object({
        id: z.number(),
        nombre: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    })
);

export {
    responseFindAllCategoriasSchema
}