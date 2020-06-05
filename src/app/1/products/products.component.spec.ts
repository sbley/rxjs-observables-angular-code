import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from '../products.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import SpyObj = jasmine.SpyObj;

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const productsServiceSpy: SpyObj<ProductsService> = jasmine.createSpyObj(
    'ProductsService',
    ['loadProducts']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: productsServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should display products', (done) => {
    productsServiceSpy.loadProducts.and.returnValue(
      of({ products: [{ name: 'pen', price: 1.23 }] })
    );

    // productsServiceSpy.loadProducts().subscribe((i) => {
    //   console.log(i);
    fixture.detectChanges();
    const divs = fixture.debugElement
      .queryAll(By.css('div'))
      .map((div) => div.nativeElement.textContent);
    expect(divs).toEqual(['pen: 1.23']);
    done();
    // });
  });
});
