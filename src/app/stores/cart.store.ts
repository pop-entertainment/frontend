import { inject, Injectable, signal } from '@angular/core';
import { ProductInfoModel } from '../shared/models';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private productStore = inject(ProductStore);
  public readonly items = signal<
    (ProductInfoModel & {
      quantity: number;
    })[]
  >([]);

  constructor() {
    this.getItemsFromLocalStorage();
  }

  private getItemsFromLocalStorage(): void {
    const cartItems = localStorage.getItem('cart_items');
    if (cartItems) {
      this.items.set(JSON.parse(cartItems));
    }
  }

  public addCurrentProductToCart(): void {
    const currentProduct = this.productStore.currentProduct();
    if (currentProduct) {
      this.items.update((products) => {
        localStorage.setItem(
          'cart_items',
          JSON.stringify([...products, { ...currentProduct, quantity: 1 }])
        );
        products.push({ ...currentProduct, quantity: 1 });
        return products;
      });
    }
  }

  public increaseQuantity(id: string): void {
    this.items.update((items) => {
      return items.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    });

    localStorage.setItem('cart_items', JSON.stringify(this.items()));
  }

  public removeItem(id: string): void {
    this.items.update((items) => {
      return items.filter((item) => id !== item.id);
    });

    localStorage.setItem('cart_items', JSON.stringify(this.items()));
  }
}
