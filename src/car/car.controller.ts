import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('Car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi mashina qo‘shish' })
  @ApiBody({ type: CreateCarDto })
  @ApiResponse({
    status: 201,
    description: 'Yaratilgan mashina',
    schema: {
      example: {
        success: true,
        statusCode: 201,
        data: {
          id: 1,
          name: 'Malibu',
          price: 25000,
          brand: 'Chevrolet',
          color: 'Qora',
          release_date: '2023-05-10',
          power: 150,
        },
      },
    },
  })
  async create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha mashinalarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Mashinalar ro‘yxati',
    schema: {
      example: {
        success: true,
        statusCode: 200,
        data: [
          {
            id: 1,
            name: 'Malibu',
            price: 25000,
            brand: 'Chevrolet',
            color: 'Qora',
            release_date: '2023-05-10',
            power: 150,
          },
          {
            id: 2,
            name: 'Cobalt',
            price: 15000,
            brand: 'Chevrolet',
            color: 'Oq',
            release_date: '2022-02-20',
            power: 105,
          },
        ],
      },
    },
  })
  async findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali mashinani olish' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Topilgan mashina',
    schema: {
      example: {
        success: true,
        statusCode: 200,
        data: {
          id: 1,
          name: 'Malibu',
          price: 25000,
          brand: 'Chevrolet',
          color: 'Qora',
          release_date: '2023-05-10',
          power: 150,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Mashina topilmadi',
    schema: {
      example: {
        statusCode: 404,
        message: 'Car with ID 999 not found',
        error: 'Not Found',
      },
    },
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mashinani yangilash' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateCarDto })
  @ApiResponse({
    status: 200,
    description: 'Mashina yangilandi',
    schema: {
      example: {
        success: true,
        statusCode: 200,
        data: {
          id: 1,
          name: 'Malibu',
          price: 27000,
          brand: 'Chevrolet',
          color: 'Qora',
          release_date: '2023-05-10',
          power: 160,
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Yaroqsiz yangilash',
    schema: {
      example: {
        statusCode: 400,
        message: 'Car with ID 1 not updated',
        error: 'Bad Request',
      },
    },
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Mashinani o‘chirish' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Mashina o‘chirildi',
    schema: {
      example: {
        success: true,
        statusCode: 200,
        data: null,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Mashina topilmadi',
    schema: {
      example: {
        statusCode: 404,
        message: 'Car with ID 1 not found',
        error: 'Not Found',
      },
    },
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.carService.remove(id);
  }
}
