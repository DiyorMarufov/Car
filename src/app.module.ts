import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import config from './config';
import { CarEntity } from './car/entities/car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_URL,
      synchronize: true,
      autoLoadEntities: true,
      entities: [CarEntity],
    }),
    CarModule,
  ],
})
export class AppModule {}
