import { CoreEntity } from '../../../application/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity("deals")
export class Deal extends CoreEntity {

  @Column({
    type: "varchar",
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'image',
  })
  image: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  description: string;

  @Column({
    type: "numeric",
    nullable: false,
    name: "total_price"
  })
  totalPrice: number;

  @Column({
    type: "numeric",
    nullable: false,
    name: "ticket_price"
  })
  ticketPrice: number;

  @Column({
    type: "numeric",
    name: "yield_percent",
    nullable: false,
    default: 0
  })
  yieldPercent: number;

  @Column({
    type: "numeric",
    name: "sold_percent",
    nullable: false,
    default: 0
  })
  sold_percent: number;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    name: "start_date",
  })
  startDate: Date;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    name: "end_date"
  })
  endDate: Date;
}