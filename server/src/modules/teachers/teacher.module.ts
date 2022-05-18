import {forwardRef, Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Teacher} from "../../models/teacher.model";
import {TeacherController} from "./controllers/teacher.controller";
import {TeacherService} from "./services/teacher.service";
import {RoleModule} from "../roles/role.module";
import {AuthModule} from "../auth/auth.module";


@Module({
    imports: [SequelizeModule.forFeature([Teacher]),
        RoleModule,
        forwardRef(()=> AuthModule)],
    controllers: [TeacherController],
    providers: [TeacherService],
    exports: [TeacherService]
})
export class TeacherModule {
}