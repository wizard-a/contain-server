import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateEntity } from './template.entity';
import { ReturnList, QueryPage } from '@/core';

@Injectable()
export class TemplateService {

  constructor(@InjectRepository(TemplateEntity)
  private templateRepository: Repository<TemplateEntity>) { }


  async create(template: Partial<TemplateEntity>): Promise<TemplateEntity> {
    template.created_by = 'zhangsan';
    return await this.templateRepository.save(template);
  }

  async queryPage(query: QueryPage): Promise<ReturnList<TemplateEntity>> {
    console.log(2)
    const qb = await this.templateRepository.createQueryBuilder('template');
    qb.where('1=1');
    qb.orderBy('template.updated_date', 'DESC');

    const count = await qb.getCount();
    console.log(count)
    const { pageNum = 1, pageSize = 10, ...params } = query;

    qb.limit(pageSize);
    qb.offset((pageNum - 1) * pageSize);

    const list = await qb.getMany();
    console.log(list)
    return { list, count };
  }
}
