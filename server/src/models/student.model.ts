import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Grup} from "./grup.model";

interface StudentCreationAttrs{
    login: string;
    password: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    grupId: number;
    subgroup: number;
    isDropped?: boolean;
}

@Table({tableName: 'students', createdAt: false, updatedAt: false})
export class Student extends Model<Student, StudentCreationAttrs>{
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
    @ForeignKey(()=>Grup)
    @Column({type: DataType.INTEGER, allowNull: false})
    grupId: number;

    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, allowNull: false})
    subgroup: number;

    @ApiProperty({type: Boolean})
    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    isDropped: boolean;

    @BelongsTo(()=> Grup)
    position: Grup

}
