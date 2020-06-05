import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIsolationComponent } from './error-isolation.component';

describe('ErrorIsolationComponent', () => {
  let component: ErrorIsolationComponent;
  let fixture: ComponentFixture<ErrorIsolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorIsolationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorIsolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
