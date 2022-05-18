import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "../../../models/role.model";
import {CreateRoleDto} from "../../../dto/role/create-role.dto";


@Injectable()
export class RoleService{

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto){
        const Role = await this.roleRepository.create(dto);
        return Role;
    }

    async getByValueRole(value: string){
        const Role = await this.roleRepository.findOne({where: {value}});
        return Role;
    }

    async getAllRoles(){
        const Roles = await this.roleRepository.findAll();
        return Roles;
    }
}