import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {GrupController} from "./controllers/grup.controller";
import {GrupService} from "./services/grup.service";
import {Grup} from "../../models/grup.model";


@Module({
    imports: [SequelizeModule.forFeature([Grup])],
    controllers: [GrupController],
    providers: [GrupService],
    exports: [GrupService]
})
export class GrupModule {}