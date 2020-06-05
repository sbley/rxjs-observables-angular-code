import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsResponse } from '../model/productsResponse';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly url = 'http://www.mocky.io/v2/5ea1fa63310000dc621eef2d';

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    return this.http
      .get<ProductsResponse>(this.url)
      .pipe(map((response) => response.products));
  }
}
