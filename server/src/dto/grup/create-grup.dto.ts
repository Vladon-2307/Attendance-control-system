import {ApiProperty} from "@nestjs/swagger";

export class CreateGrupDto{
    @ApiProperty({type: String})
    readonly name: string;
    @ApiProperty({type: Number})
    readonly well: number;
    @ApiProperty({type: Number})
    readonly teacherId: number;
}