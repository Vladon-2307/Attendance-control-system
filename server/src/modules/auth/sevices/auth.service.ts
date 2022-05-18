import {Injectable, UnauthorizedException} from "@nestjs/common";
import {TeacherService} from "../../teachers/services/teacher.service";
import {JwtService} from "@nestjs/jwt";
import {Teacher} from "../../../models/teacher.model";
import * as bcrypt from 'bcrypt';
import {SinginTeacherDto} from "../../../dto/teacher/singin-teacher.dto";



@Injectable()
export class AuthService{

    constructor(private teacherService: TeacherService,
                private jwtService: JwtService) {
    }

    async singinTeacher(teacherDto: SinginTeacherDto){
        const teacher = await this.validateTeacher(teacherDto)
        return this.generateToken(teacher)
    }

    private async generateToken(teacher: Teacher){
        const payload = {id: teacher.id, roles: teacher.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateTeacher(teacherDto: SinginTeacherDto) {
        const teacher = await this.teacherService.getByLoginTeacher(teacherDto.login)
        if(teacher){
            const passwordEquals = await bcrypt.compare(teacherDto.password, teacher.password)
            if(passwordEquals){
                return teacher
            }
        }
       throw new UnauthorizedException({message: 'Некоректный логин или пароль'})
    }
}