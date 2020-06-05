import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  template:
    '<div *ngFor="let p of products$ | async">{{p.name}}: {{p.price}}</div>',
})
export class ProductsComponent {
  products$: Observable<Product[]> = this.productsService.loadProducts();

  constructor(private productsService: ProductsService) {}
}
