import {ApiProperty} from "@nestjs/swagger";

export class CreatePositionDto {
    @ApiProperty({type: String})
    readonly value: string;
    @ApiProperty({type: Number})
    readonly priceWork: number;
}