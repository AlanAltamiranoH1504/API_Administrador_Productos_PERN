import {z} from "zod";

const responseFindAllCategoriasSchema = z.array(
    z.object({
        id: z.number(),
        nombre: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    })
);

const responseFindCategoriaByIdSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

const responseUpdateCategoriaByIdSchema = z.object({
    status: z.boolean(),
    message: z.string(),
})

export {
    responseFindAllCategoriasSchema,
    responseFindCategoriaByIdSchema,
    responseUpdateCategoriaByIdSchema
}