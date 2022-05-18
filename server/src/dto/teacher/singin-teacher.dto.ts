import {ApiProperty} from "@nestjs/swagger";


export class SinginTeacherDto {
    @ApiProperty({type: String})
    readonly login: string;
    @ApiProperty({type: String})
    readonly password: string;
}