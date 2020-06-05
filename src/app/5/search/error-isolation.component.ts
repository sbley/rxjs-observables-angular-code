import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  template: `<input
      type="text"
      [formControl]="searchTerm"
      placeholder="Search"
    />
    <div *ngFor="let p of products$ | async">{{ p.name }}</div>
    <div *ngIf="errorMessage" class="notification is-danger">
      {{ errorMessage }}
    </div>`,
})
export class ErrorIsolationComponent {
  searchTerm = new FormControl();
  errorMessage = '';

  products$ = this.searchTerm.valueChanges.pipe(
    tap(() => (this.errorMessage = '')),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
      this.productsService.findProducts(searchTerm).pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return of([]);
        })
      )
    )
  );

  constructor(private productsService: ProductsService) {}
}
