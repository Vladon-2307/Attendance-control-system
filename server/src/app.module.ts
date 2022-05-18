import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Position} from "./models/position.model";
import {Role} from "./models/role.model";
import {Teacher} from "./models/teacher.model";
import {PositionModule} from "./modules/positions/position.module";
import {TeacherRoles} from "./models/teacher-roles.model";
import {RoleModule} from "./modules/roles/role.module";
import {TeacherModule} from "./modules/teachers/teacher.module";
import {AuthModule} from "./modules/auth/auth.module";
import {Grup} from "./models/grup.model";
import {GrupModule} from "./modules/grup/grup.module";
import {Student} from "./models/student.model";
import {StudentModule} from "./modules/student/student.module";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            models: [Position, Role, Teacher, TeacherRoles, Grup, Student],
            autoLoadModels: true
        }),
        AuthModule,
        PositionModule,
        RoleModule,
        TeacherModule,
        GrupModule,
        StudentModule
    ],
})
export class AppModule{}
