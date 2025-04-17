import { Injectable, signal } from '@angular/core';
import { ProductInfoModel } from '../shared/models';

@Injectable({ providedIn: 'root' })
export class ProductStore {
  public readonly products = signal<ProductInfoModel[]>([]);
  public readonly currentProduct = signal<ProductInfoModel | null>(null);
}
