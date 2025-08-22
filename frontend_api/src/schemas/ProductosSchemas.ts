import {z} from "zod";

const responseSaveProductoAPI = z.object({
    status: z.boolean(),
    message: z.string()
});

const responseFindAllProductosSchema = z.object({
    status: z.boolean(),
    total: z.number(),
    productos: z.array(
        z.object({
            id: z.number(),
            nombre: z.string(),
            descripcion: z.string(),
            precio: z.string(),
            disponible: z.boolean(),
            categoriaId: z.number(),
            categoria: z.object({
                id: z.number(),
                nombre: z.string(),
            })
        })
    )
});

const responseFindProductoByIdSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    descripcion: z.string(),
    precio: z.string(),
    disponible: z.boolean(),
    categoriaId: z.number(),
    categoria: z.object({
        id: z.number(),
        nombre: z.string(),
    })
});

export {
    responseSaveProductoAPI,
    responseFindAllProductosSchema,
    responseFindProductoByIdSchema
}