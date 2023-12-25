import { Column, Entity,JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../base.entity';
import { Program } from 'src/programs/entities';



@Entity({ name: 'message' })
export class Message extends BaseEntity {

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  

  @Column({ nullable: true })
  message: string;

  
  
  @ManyToOne(() => Program, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'programId' })
  program: Program
}
