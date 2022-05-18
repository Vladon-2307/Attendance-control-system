import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Teacher} from "./teacher.model";

interface PositionCreationAttrs{
    value: string;
    priceWork: number;
}

@Table({tableName: 'positions', createdAt: false, updatedAt: false})
export class Position extends Model<Position, PositionCreationAttrs>{
    @ApiProperty({type: Number})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({type: String})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({type: Number})
    @Column({type: DataType.FLOAT, allowNull: false})
    priceWork: number;

    @HasMany(()=> Teacher)
    teachers: Teacher[]
}