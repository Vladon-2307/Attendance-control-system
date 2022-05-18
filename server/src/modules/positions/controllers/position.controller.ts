import {BadRequestException, Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PositionService} from "../services/position.service";
import {CreatePositionDto} from "../../../dto/position/create-position.dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Position} from "../../../models/position.model";

@ApiTags('position')
@Controller('position')
export class PositionController{

    constructor(private positionService: PositionService) {
    }

    @ApiResponse({status: 201, type: Position})
    @Post()
    create(@Body() positionDto: CreatePositionDto){
        try {
            return this.positionService.createPosition(positionDto)
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }
    }

    @ApiResponse({status: 200, type: [Position]})
    @Get()
    getAll(){
        try {
            return this.positionService.getAllPositions()
        }catch (e) {
            throw new BadRequestException({message: "Данные не найдены"})
        }
    }

    @ApiResponse({status: 200, type: Position})
    @Get('/:id')
    getById(@Param('id') id: number){
        try {
            return this.positionService.getByIdPosition(id)
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }
    }
}