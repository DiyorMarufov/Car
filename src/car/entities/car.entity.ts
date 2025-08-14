import { Column, Entity } from 'typeorm';

@Entity('car')
export class CarEntity {
  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'number', name: 'price' })
  price: number;

  @Column({ type: 'varchar', name: 'brand' })
  brand: string;

  @Column({ type: 'varchar', name: 'color' })
  color: string;

  @Column({ type: 'varchar', name: 'release_date' })
  release_date: string;

  @Column({ type: 'varchar', name: 'power' })
  power: number;
}
