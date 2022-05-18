import {Module} from "@nestjs/common";
import {StudentController} from "./controllers/student.controller";
import {StudentService} from "./services/student.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Student} from "../../models/student.model";


@Module({
    imports: [SequelizeModule.forFeature([Student])],
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule {}