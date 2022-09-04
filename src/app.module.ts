import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoCaracteristicoEntity } from './producto-caracteristico/producto-caracteristico.entity';
import { ProductoCaracteristicoModule } from './producto-caracteristico/producto-caracteristico.module';
import { RecetaModule } from './receta/receta.module';
import { RecetaEntity } from './receta/receta.entity';
import { PaisModule } from './pais/pais.module';
import { PaisEntity } from './pais/pais.entity';

@Module({
  imports: [
    RecetaModule,
    PaisModule,
    ProductoCaracteristicoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'culturasGastronomicas',
      entities: [RecetaEntity, PaisEntity, ProductoCaracteristicoEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
