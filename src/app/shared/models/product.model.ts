import { BaseEntity } from './base-entity.model';
import { CategoryModel } from './category.model';
import { SubCategoryModel } from './sub-category.model';

export interface ProductInfoModel extends BaseEntity {
  title: string;
  price: number;
  description: string;
  productStatus: 0 | 1 | 2; // Нет в наличии | В наличии в городе | На заказ
  imagePath: string;
  discount: number;
  categoryId?: string;
  productCategory?: CategoryModel;
  subCategoryId?: string;
  productSubCategory?: SubCategoryModel;
}
