import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";


@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private jwtService: JwtService,
                private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])


            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if(bearer != 'Bearer' || !token){

                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }

            const user = this.jwtService.verify(token)
            req.user = user;
            if(!requiredRoles){
                return true
            }

            return user.roles.some(role=>requiredRoles.includes(role.value))
        }catch (e) {
            throw new UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }

}