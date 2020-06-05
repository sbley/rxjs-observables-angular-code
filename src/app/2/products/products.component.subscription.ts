import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  template: '<div *ngFor="let p of products">{{p.name}}: {{p.price}}</div>',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.subscription = this.productsService
      .loadProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
