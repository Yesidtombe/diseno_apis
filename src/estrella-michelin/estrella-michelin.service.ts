/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { EstrellaMichelinEntity } from './estrella-michelin.entity';

@Injectable()
export class EstrellaMichelinService {
    constructor(
        @InjectRepository(EstrellaMichelinEntity)
        private readonly estrellaRepository: Repository<EstrellaMichelinEntity>
    ){}

    async findAll(): Promise<EstrellaMichelinEntity[]> {
        return await this.estrellaRepository.find();
    }
 
    async findOne(id: string): Promise<EstrellaMichelinEntity> {
        const estrella: EstrellaMichelinEntity = await this.estrellaRepository.findOne({where: {id}});
        if (!estrella)
          throw new BusinessLogicException("The michelin star with the given id was not found", BusinessError.NOT_FOUND);
   
        return estrella;
    }
   
    async create(estrella: EstrellaMichelinEntity): Promise<EstrellaMichelinEntity> {
        return await this.estrellaRepository.save(estrella);
    }
 
    async update(id: string, estrella: EstrellaMichelinEntity): Promise<EstrellaMichelinEntity> {
        const persistedEstrella: EstrellaMichelinEntity = await this.estrellaRepository.findOne({where:{id}});
        if (!persistedEstrella)
          throw new BusinessLogicException("The michelin star with the given id was not found", BusinessError.NOT_FOUND);
       
          return await this.estrellaRepository.save({...persistedEstrella, ...estrella});
    }
 
    async delete(id: string) {
        const estrella: EstrellaMichelinEntity = await this.estrellaRepository.findOne({where:{id}});
        if (!estrella)
          throw new BusinessLogicException("The michelin star with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.estrellaRepository.remove(estrella);
    }
}
