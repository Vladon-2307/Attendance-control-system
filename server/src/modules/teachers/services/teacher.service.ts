import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Teacher} from "../../../models/teacher.model";
import {CreateTeacherDto} from "../../../dto/teacher/create-teacher.dto";
import {RoleService} from "../../roles/services/role.service";
import * as bcrypt from 'bcrypt';
import {Role} from "../../../models/role.model";


@Injectable()
export class TeacherService{

    constructor(@InjectModel(Teacher) private teacherRepository: typeof Teacher,
                private roleService: RoleService) {
    }

    async createTeacher(dto: CreateTeacherDto){
        const hashPassword = await bcrypt.hash(dto.password, Number(process.env.SALT_OR_ROUNDS))
        const Teacher = await this.teacherRepository.create({...dto, password: hashPassword})
        let Role = await this.roleService.getByValueRole('teacher')
        if(!Role){
            Role = await this.roleService.createRole({value: 'teacher', description: 'Преподователь'})
        }
        await Teacher.$set('roles', [Role.id])
        return Teacher

    }

    async getAllTeachers(){
        const Teachers = await this.teacherRepository.findAll({include: Role})
        return Teachers
    }

    async getByLoginTeacher(login: string){
        const Teacher = await this.teacherRepository.findOne({where: {login}, include: Role})
        return Teacher
    }
}