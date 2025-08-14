import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('car')
export class CarEntity {
  @ApiProperty({
    description: 'Mashinaning unikal ID raqami',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Mashina nomi',
    example: 'Malibu',
  })
  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @ApiProperty({
    description: 'Mashina narxi (USD)',
    example: 25000,
  })
  @Column({ type: 'int', name: 'price' })
  price: number;

  @ApiProperty({
    description: 'Mashina brendi',
    example: 'Chevrolet',
  })
  @Column({ type: 'varchar', name: 'brand' })
  brand: string;

  @ApiProperty({
    description: 'Mashina rangi',
    example: 'Qora',
  })
  @Column({ type: 'varchar', name: 'color' })
  color: string;

  @ApiProperty({
    description: 'Mashina chiqarilgan sana (ISO formatda)',
    example: '2023-05-10',
  })
  @Column({ type: 'varchar', name: 'release_date' })
  release_date: string;

  @ApiProperty({
    description: 'Mashinaning ot kuchi (HP)',
    example: 150,
  })
  @Column({ type: 'int', name: 'power' })
  power: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
