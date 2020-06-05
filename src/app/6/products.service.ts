import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  findProducts(query: string): Observable<Product[]> {
    return this.loadProducts().pipe(
      catchError((error) => {
        console.error('GET failed', error);
        const message = "We cannot find your product. Please try again later.";
        return throwError(message);
      }),
      map((products) =>
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }

  getProducts(character: string): Observable<Product[]> {
    return this.loadProducts().pipe(
      map((products) =>
        products.filter((product) =>
          product.name.toLowerCase().startsWith(character.toLowerCase())
        )
      )
    );
  }
}
