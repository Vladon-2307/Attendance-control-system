import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {RoleController} from "./controllers/role.controller";
import {RoleService} from "./services/role.service";
import {Role} from "../../models/role.model";


@Module({
    imports: [SequelizeModule.forFeature([Role])],
    controllers: [RoleController],
    providers: [RoleService],
    exports: [RoleService]
})
export class RoleModule {}