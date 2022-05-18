import {ApiProperty} from "@nestjs/swagger";

export class CreateTeacherDto{
    @ApiProperty({type: String})
    readonly login: string;
    @ApiProperty({type: String})
    readonly password: string;
    @ApiProperty({type: String})
    readonly last_name: string;
    @ApiProperty({type: String})
    readonly first_name: string;
    @ApiProperty({type: String})
    readonly middle_name: string;
    @ApiProperty({type: Number})
    readonly positionId: number;
}