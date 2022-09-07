import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';
import { TemplateEntity } from './template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TemplateEntity]),
  ],
  controllers: [TemplateController],
  providers: [TemplateService]
})
export class TemplateModule { }
