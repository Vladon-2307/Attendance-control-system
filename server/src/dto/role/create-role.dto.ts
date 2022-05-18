import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto{
    @ApiProperty({type: String})
    readonly value: string;
    @ApiProperty({type: String})
    readonly description: string;
}