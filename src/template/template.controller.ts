import { QueryPage } from '@/core';
import { TemplateService } from './template.service';
import { TemplateEntity } from './template.entity';
import { Body, Controller, Query, Post, Get } from '@nestjs/common';


@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) { }

  /**
   * 创建模板
   * @param template 模板实体
   * @returns
   */
  @Post()
  async create(@Body() template: TemplateEntity) {
    console.log('template', template)
    return await this.templateService.create(template);
  }

  /**
   * 分页获取模板列表
   * @param query
   * @returns
   */
  @Get()
  async queryPage(@Query() query: QueryPage) {
    console.log(query)
    return await this.templateService.queryPage(query);
  }
}
