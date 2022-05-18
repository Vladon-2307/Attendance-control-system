import {BadRequestException, Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {StudentService} from "../services/student.service";
import {CreateStudentDto} from "../../../dto/student/create-student.dto";
import {Student} from "../../../models/student.model";

@ApiTags('student')
@Controller('student')
export class StudentController{

    constructor(private StudentService: StudentService) {
    }

    @ApiResponse({status: 201, type: Student})
    @Post()
    create(@Body() studentDto: CreateStudentDto){
        try {
            return this.StudentService.createStudent(studentDto);
        }catch (e){
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: Student})
    @Get('/:login')
    getByValue(@Param('login') login: string){
        try {
            return this.StudentService.getByLoginStudent(login);
        }catch (e) {
            throw new BadRequestException({message: "Введенны неверные данные"})
        }

    }

    @ApiResponse({status: 200, type: [Student]})
    @Get()
    getAll(){
        try {
            return this.StudentService.getAllStudents();
        }catch (e) {
            throw new BadRequestException({message: "Данные не найдены"})
        }

    }
}