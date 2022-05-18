import {BadRequestException, Body, Controller, Get, Param, Post} from "@nestjs/common";
import {GrupService} from "../services/grup.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateGrupDto} from "../../../dto/grup/create-grup.dto";
import {Grup} from "../../../models/grup.model";

@ApiTags('grup')
@Controller('grup')
export class GrupController {

    constructor(private grupService: GrupService) {
    }

    @ApiResponse({status: 201, type: Grup})
    @Post()
    create(@Body() grupDto: CreateGrupDto){
        try {
            return this.grupService.createGrup(grupDto);
        }catch (e){
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: Grup})
    @Get('/:name')
    getByName(@Param('name') name: string){
        try {
            return this.grupService.getByNameGrup(name);
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: [Grup]})
    @Get()
    getAll(){
        try {
            return this.grupService.getAllGrups();
        }catch (e) {
            throw new BadRequestException({message: "Данные не найдены"})
        }

    }
}