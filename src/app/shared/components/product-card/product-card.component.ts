import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductInfoModel } from '../../models';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: ProductInfoModel = {
    id: '1',
    imagePath: '',
    price: 0,
    title: '',
    description: '',
    productStatus: 0,
    discount: 0,
    categoryId: '',
    productCategory: undefined
  };
}
