import {Table, Model, Column, HasMany, DataType} from "sequelize-typescript";
import Producto from "./Producto";

// Nombre de la tabla
@Table({
    tableName: "categorias"
})
class Categoria extends Model {
    //Atributos del modelo
    @Column({type: DataType.STRING})
    declare nombre: string;

    // Una categoria puede tener varios Productos
    @HasMany(() => Producto, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    declare productos: Producto[];
}

export default Categoria;