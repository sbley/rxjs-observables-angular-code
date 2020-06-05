import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../model/product';
import { ProductsService } from '../products.service';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-router',
  template: `<div>
      <a *ngFor="let c of alphabet" [routerLink]="c">[{{ c }}] </a>
    </div>
    <div *ngFor="let p of products$ | async">{{ p.name }}</div>`,
})
export class RouterComponent implements OnInit, OnDestroy {
  readonly alphabet = [...'ABCDEFGHIJKLMNOPQURSTUVXYZ'];
  products$: Observable<Product[]> = this.route.paramMap.pipe(
    map((params) => params.get('char')),
    filter(char => !!char),
    switchMap((char) => this.productsService.getProducts(char))
  );
  private destroyed$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event) => console.log(event));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
