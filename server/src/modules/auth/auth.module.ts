import {forwardRef, Module} from "@nestjs/common";
import {AuthController} from "./controllers/auth.controller";
import {AuthService} from "./sevices/auth.service";
import {TeacherModule} from "../teachers/teacher.module";
import {JwtModule} from "@nestjs/jwt";


@Module({
    imports: [forwardRef(()=> TeacherModule),
        JwtModule.register({
            secret: String(process.env.JWT_SECRET),
            signOptions:{
                expiresIn: '12h',
            }
        })],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService,
        JwtModule]
})
export class AuthModule {}