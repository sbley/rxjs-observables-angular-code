import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './1/products/products.component';
import { ProductsComponent as P2 } from './1/products/products.component';
import { ProductsComponent as P3 } from './2/products/products.component.subscription';
import { ProductsComponent as P4 } from './2/products/products.component.takeuntil';
import { ProductsComponent as P5 } from './2/products/products.component.asyncpipe';
import { SearchComponent } from './3/search/search.component';
import { ErrorHandlingComponent } from './4/search/error-handling.component';
import { ErrorIsolationComponent } from './5/search/error-isolation.component';
import { RouterComponent } from './6/router/router.component';
import { RouterEventsComponent } from './6/router/router-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    P2,
    P3,
    P4,
    P5,
    SearchComponent,
    ErrorHandlingComponent,
    ErrorIsolationComponent,
    RouterComponent,
    RouterEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
