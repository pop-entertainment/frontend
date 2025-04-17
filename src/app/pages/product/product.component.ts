import { Component, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { CartStore, ProductStore } from '../../stores';
import { StoreService } from '../../services';

@Component({
  selector: 'app-product',
  imports: [MatButtonModule, MatIconModule, RouterModule, BackButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private cartStore = inject(CartStore);
  private route = inject(ActivatedRoute);
  private storeService = inject(StoreService);

  private id = this.route.snapshot.paramMap.get('id');

  productStore = inject(ProductStore);

  constructor() {
    effect(() => {
      this.getProduct();
    });
  }

  getProduct(): void {
    if (this.id) {
      this.storeService.getProduct(this.id).subscribe((product) => {
        this.productStore.currentProduct.set(product);
      });
    }
  }

  addToCart(): void {
    const isInCart =
      this.cartStore
        .items()
        .find((item) => item.id === this.productStore.currentProduct()?.id) ??
      false;

    if (this.productStore.currentProduct() && !isInCart) {
      this.cartStore.addCurrentProductToCart();
    }
  }
}
