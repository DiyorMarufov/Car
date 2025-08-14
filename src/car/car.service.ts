import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { catchError } from 'src/lib/not-found';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './entities/car.entity';
import { Repository } from 'typeorm';
import { successRes } from 'src/lib/success';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepo: Repository<CarEntity>,
  ) {}
  async create(createCarDto: CreateCarDto) {
    try {
      const newCar = this.carRepo.create(createCarDto);
      await this.carRepo.save(newCar);
      return successRes(newCar, 201);
    } catch (error) {
      return catchError(error);
    }
  }

  async findAll() {
    return `This action returns all car`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
