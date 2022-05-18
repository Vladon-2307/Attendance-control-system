import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateStudentDto{
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
    readonly grupId: number;
    @ApiProperty({type: Number})
    readonly subgroup: number;
    @ApiProperty({type: Boolean})
    @ApiPropertyOptional()
    readonly isDropped?: boolean;
}