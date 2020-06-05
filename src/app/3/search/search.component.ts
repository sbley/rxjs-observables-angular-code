import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template:
    `<input type="text" [formControl]="searchTerm" placeholder="Search"/>
     <div *ngFor="let p of products$ | async">{{ p.name }}</div>`,
})
export class SearchComponent {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;

  products$ = this.searchTerms$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((searchTerm) => this.productsService.findProducts(searchTerm))
  );

  constructor(private productsService: ProductsService) {}
}
