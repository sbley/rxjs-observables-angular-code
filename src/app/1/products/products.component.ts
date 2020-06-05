import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  template: '<div *ngFor="let p of products">{{p.name}}: {{p.price}}</div>',
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .loadProducts()
      .subscribe((response) => (this.products = response.products));
  }
}
