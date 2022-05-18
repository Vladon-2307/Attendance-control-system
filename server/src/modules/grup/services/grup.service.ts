import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Grup} from "../../../models/grup.model";
import {CreateGrupDto} from "../../../dto/grup/create-grup.dto";


@Injectable()
export class GrupService {

    constructor(@InjectModel(Grup) private grupRepository: typeof Grup) {
    }

    async createGrup(dto: CreateGrupDto){
        const Grup = await this.grupRepository.create(dto);
        return Grup;
    }

    async getByNameGrup(name: string){
        const Grup = await this.grupRepository.findOne({where: {name}});
        return Grup;
    }

    async getAllGrups(){
        const Grups = await this.grupRepository.findAll();
        return Grups;
    }
}