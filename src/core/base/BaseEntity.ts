
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity {

  constructor() {
    this.created_by = 'zhangsan'
  }

  @PrimaryGeneratedColumn('uuid')
  id: string; // 标记为主列，值自动生成

  @Column()
  created_by: string;

  // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP"
  })
  created_date: Date

  @Column()
  updated_by: string;

  // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  @UpdateDateColumn()
  updated_date: Date
}
