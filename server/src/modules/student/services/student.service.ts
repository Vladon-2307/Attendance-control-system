import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Student} from "../../../models/student.model";
import {CreateStudentDto} from "../../../dto/student/create-student.dto";


@Injectable()
export class StudentService{

    constructor(@InjectModel(Student) private studentRepository: typeof Student) {
    }

    async createStudent(dto: CreateStudentDto){
        const Student = await this.studentRepository.create(dto);
        return Student;
    }

    async getByLoginStudent(login: string){
        const Student = await this.studentRepository.findOne({where: {login}});
        return Student;
    }

    async getAllStudents(){
        const Students = await this.studentRepository.findAll();
        return Students;
    }
}