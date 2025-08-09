import {Table, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript";
import {Model} from "sequelize-typescript";
import Categoria from "./Categoria";

//Nombre de la tabla
@Table({
    tableName: "productos"
})
class Producto extends Model {
    //Atributo del modelo
    @Column({type: DataType.STRING})
    declare nombre: string;

    @Column({type: DataType.STRING})
    declare descripcion: string

    @Column({type: DataType.DECIMAL})
    declare precio: number

    @Column({type: DataType.BOOLEAN})
    declare disponible: boolean

    //Un producto pertenece a una categoria
    @ForeignKey(() => Categoria)
    declare categoriaId: number;
    @BelongsTo(() => Categoria)
    declare categoria: Categoria;
}
export default Producto;