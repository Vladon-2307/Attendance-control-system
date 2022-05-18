import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Teacher} from "./teacher.model";
import {TeacherRoles} from "./teacher-roles.model";

interface RoleCreationAttrs{
    value: string;
    description: string;
}

@Table({tableName: 'roles', createdAt: false, updatedAt: false})
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(()=> Teacher, ()=>TeacherRoles)
    teachers: Teacher[]
}