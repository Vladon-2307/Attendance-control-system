import {BadRequestException, Body, Controller, Get, Post,} from "@nestjs/common";
import {CreateTeacherDto} from "../../../dto/teacher/create-teacher.dto";
import {TeacherService} from "../services/teacher.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Teacher} from "../../../models/teacher.model";

@ApiTags('teacher')
@Controller('teacher')
export class TeacherController{

    constructor(private teacherService: TeacherService) {
    }

    @ApiResponse({status: 201, type: Teacher})
    @Post()
    create(@Body() teacherDto: CreateTeacherDto){
        try {
            return this.teacherService.createTeacher(teacherDto)
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }
    }


    @ApiResponse({status: 200, type: [Teacher]})
    @Get()
    getAll(){
        try {
            return this.teacherService.getAllTeachers()
        }catch (e) {
            throw new BadRequestException({message: "Данные не найдены"})
        }
    }
}