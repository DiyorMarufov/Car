import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({
    description: 'Mashina nomi',
    example: 'Malibu',
    minLength: 2,
  })
  @Min(2)
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Mashina narxi (USD)',
    example: 25000,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Mashina brendi',
    example: 'Chevrolet',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    description: 'Mashina rangi',
    example: 'Qora',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'Chiqarilgan sana (ISO format)',
    example: '2023-05-10',
  })
  @IsString()
  @IsNotEmpty()
  release_date: string;

  @ApiProperty({
    description: 'Mashina ot kuchi (power in HP)',
    example: 150,
  })
  @IsNumber()
  @IsNotEmpty()
  power: number;
}
