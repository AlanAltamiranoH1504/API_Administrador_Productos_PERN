import {Table, Column, DataType} from "sequelize-typescript";
import {Model} from "sequelize-typescript";

//Nombre de la tabla
@Table({
    tableName: "productos"
})
class Producto extends Model {
    //Atributo del modelo
    @Column({type: DataType.STRING})
    nombre: string;

    @Column({type: DataType.STRING})
    descripcion: string

    @Column({type: DataType.DECIMAL})
    precio: number

    @Column({type: DataType.BOOLEAN})
    disponible: boolean
}
export default Producto;