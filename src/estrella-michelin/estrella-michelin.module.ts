/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstrellaMichelinEntity } from './estrella-michelin.entity';
import { EstrellaMichelinService } from './estrella-michelin.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstrellaMichelinEntity])],
  providers: [EstrellaMichelinService]
})
export class EstrellaMichelinModule {}
