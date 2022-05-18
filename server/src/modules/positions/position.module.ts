import {Module} from "@nestjs/common";
import {PositionController} from "./controllers/position.controller";
import {PositionService} from "./services/position.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Position} from "../../models/position.model";


@Module({
    imports: [SequelizeModule.forFeature([Position])],
    controllers: [PositionController],
    providers: [PositionService],
    exports: [PositionService]
})
export class PositionModule {}