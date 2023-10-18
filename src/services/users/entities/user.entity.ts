import { CoreEntity } from '../../../application/entities/core.entity';
import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity("users")
export class User extends CoreEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;
}