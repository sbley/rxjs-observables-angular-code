import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  template: '<div *ngFor="let p of products">{{p.name}}: {{p.price}}</div>',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  private destroyed$ = new Subject<void>();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .loadProducts()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((products) => (this.products = products));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
