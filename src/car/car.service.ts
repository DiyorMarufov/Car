import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      const cars = await this.carRepo.find();
      return successRes(cars);
    } catch (error) {
      return catchError(error);
    }
  }

  async findOne(id: number) {
    try {
      const car = await this.carRepo.findOne({ where: { id } });

      if (!car) {
        throw new NotFoundException(`Car with ID ${id} not found`);
      }

      return successRes(car);
    } catch (error) {
      return catchError(error);
    }
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    try {
      const car = await this.carRepo.findOne({ where: { id } });
      if (!car) {
        throw new NotFoundException(`Car with ID ${id} not found`);
      }

      const { affected } = await this.carRepo.update(id, updateCarDto);
      if (!affected) {
        throw new BadRequestException(`Car with ID ${id} not updated`);
      }

      const updatedCar = await this.carRepo.findOne({ where: { id } });
      return successRes(updatedCar);
    } catch (error) {
      return catchError(error);
    }
  }

  async remove(id: number) {
    try {
      const car = await this.carRepo.findOne({ where: { id } });

      if (!car) {
        throw new NotFoundException(`Car with ID ${id} not found`);
      }

      await this.carRepo.delete(id);
      return successRes();
    } catch (error) {
      return catchError(error);
    }
  }
}
