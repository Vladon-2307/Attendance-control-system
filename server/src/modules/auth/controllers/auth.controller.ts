import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "../sevices/auth.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {SinginTeacherDto} from "../../../dto/teacher/singin-teacher.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController{

    constructor(private authService: AuthService) {
    }

    @ApiResponse({ status: 201, description: 'Token: String'})
    @Post('/teacher')
    create(@Body() teacherDto: SinginTeacherDto){
        return this.authService.singinTeacher(teacherDto)
    }


}