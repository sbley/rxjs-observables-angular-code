import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './1/products/products.component';
import { ProductsComponent as P2S } from './2/products/products.component.subscription';
import { ProductsComponent as P2A } from './2/products/products.component.asyncpipe';
import { SearchComponent } from './3/search/search.component';
import { ErrorHandlingComponent } from './4/search/error-handling.component';
import { ErrorIsolationComponent } from './5/search/error-isolation.component';
import { RouterComponent } from './6/router/router.component';

const routes: Routes = [
  { path: '1', component: ProductsComponent },
  { path: '2s', component: P2S },
  { path: '2a', component: P2A },
  { path: '3', component: SearchComponent },
  { path: '4', component: ErrorHandlingComponent },
  { path: '5', component: ErrorIsolationComponent },
  { path: '6', component: RouterComponent, children: [{ path: ':char', component: RouterComponent,  }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
