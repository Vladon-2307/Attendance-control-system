import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Position} from "../../../models/position.model";
import {CreatePositionDto} from "../../../dto/position/create-position.dto";


@Injectable()
export class PositionService{

    constructor(@InjectModel(Position) private positionRepository: typeof Position) {
    }

    async createPosition(dto: CreatePositionDto){
        const Position = this.positionRepository.create(dto)
        return Position
    }

    async getAllPositions(){
        const Positions = this.positionRepository.findAll()
        return Positions
    }

    async getByIdPosition(id: number){
        const Position = this.positionRepository.findByPk(id)
        return Position
    }
}