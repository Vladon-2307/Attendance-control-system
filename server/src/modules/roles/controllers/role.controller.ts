import {BadRequestException, Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CreateRoleDto} from "../../../dto/role/create-role.dto";
import {RoleService} from "../services/role.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Role} from "../../../models/role.model";

@ApiTags('role')
@Controller('role')
export class RoleController{

    constructor(private roleService: RoleService) {
    }

    @ApiResponse({status: 201, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto){
        try {
            return this.roleService.createRole(roleDto);
        }catch (e){
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getByValue(@Param('value') value: string){
        try {
            return this.roleService.getByValueRole(value);
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: [Role]})
    @Get()
    getAll(){
        try {
            return this.roleService.getAllRoles();
        }catch (e) {
            throw new BadRequestException({message: "Данные не найдены"})
        }

    }
}