import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "./role.model";
import {TeacherRoles} from "./teacher-roles.model";
import {Position} from "./position.model";
import {Grup} from "./grup.model";

interface TeacherCreationAttrs{
    login: string;
    password: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    positionId: number;
}

@Table({tableName: 'teachers', createdAt: false, updatedAt: false})
export class Teacher extends Model<Teacher, TeacherCreationAttrs>{
    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, allowNull: false})
    last_name: string;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, allowNull: false})
    first_name: string;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, allowNull: false})
    middle_name: string;

    @ApiProperty({type: Number})
    @ForeignKey(()=>Position)
    @Column({type: DataType.INTEGER, allowNull: false})
    positionId: number;

    @BelongsTo(()=> Position)
    position: Position

    @ApiProperty({type: [Role]})
    @BelongsToMany(()=> Role, ()=>TeacherRoles)
    roles: Role[]

    @HasMany(()=> Grup)
    grups: Grup[]
}
