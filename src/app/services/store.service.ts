import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { ProductInfoModel } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient);

  public getProducts(): Observable<ProductInfoModel[]> {
    const headers = new HttpHeaders({
      Pragma: 'no-cache',
      Expires: '0',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0'
    });

    return this.http
      .get<{
        products: ProductInfoModel[];
      }>('../../assets/mocks-products.json', {
        headers,
        responseType: 'json'
      })
      .pipe(map((response) => response.products));
  }

  public getProduct(id: string): Observable<ProductInfoModel | null> {
    const headers = new HttpHeaders({
      Pragma: 'no-cache',
      Expires: '0',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0'
    });

    return this.http
      .get<{
        products: ProductInfoModel[];
      }>('../../assets/mocks-products.json', {
        headers,
        responseType: 'json'
      })
      .pipe(
        map(
          (response) =>
            response.products.find((product) => product.id === id) ?? null
        )
      );
  }
}
