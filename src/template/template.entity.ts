import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from '@/core/base';

@Entity("t_template")
export class TemplateEntity extends BaseEntity {

  @Column({ length: 50 })
  name: string;

  @Column("simple-json")
  content: any;
}
