import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../model/product';
import { ProductsService } from '../products.service';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-router',
  template: ``,
})
export class RouterEventsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event) => console.log(event));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
