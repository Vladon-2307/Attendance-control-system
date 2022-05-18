import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Teacher} from "./teacher.model";
import {Role} from "./role.model";


@Table({tableName: 'teacher_roles', createdAt: false, updatedAt: false})
export class TeacherRoles extends Model<TeacherRoles>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(()=>Teacher)
    @Column({type: DataType.INTEGER})
    teacherId: number;

}