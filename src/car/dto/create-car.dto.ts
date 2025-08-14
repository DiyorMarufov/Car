import { IsDate, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateCarDto {
  @Min(2)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  release_date: string;

  @IsNumber()
  @IsNotEmpty()
  power: number;
}
