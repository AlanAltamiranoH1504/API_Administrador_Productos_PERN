import {Table, Column, DataType} from "sequelize-typescript";
import {Model} from "sequelize-typescript";

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
}
export default Producto;