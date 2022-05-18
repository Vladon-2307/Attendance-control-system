import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Teacher} from "./teacher.model";
import {Student} from "./student.model";

interface GrupCreationAttrs{
    name: string;
    well: number;
    teacherId: number;
}

@Table({tableName: 'grups', createdAt: false, updatedAt: false})
export class Grup extends Model<Grup, GrupCreationAttrs> {
    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, allowNull: false})
    well: number;

    @ApiProperty({type: Number})
    @ForeignKey(()=>Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    teacherId: number;

    @BelongsTo(() => Teacher)
    teacher: Teacher

    @HasMany(()=> Student)
    student: Student[]
}