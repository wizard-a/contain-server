
import { BaseEntity } from './BaseEntity';

export type ReturnList<BaseEntity> = {
  count: number;
  list: BaseEntity[];
}

export type ReturnData = {
  code: number;
  data: any;
  message: string;
}

export type QueryPage = {
  pageNum: number;
  pageSize: number;
  orderBy: "ASC" | "DESC";
  orderKey: string;
  [x: string]: any;
}