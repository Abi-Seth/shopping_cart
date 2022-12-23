import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './views/products/products.component';
import { CartComponent } from './views/cart/cart.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent
  },
  {
		path: 'cart',
		component: CartComponent
  },
  {
		path: '',
		redirectTo: 'products',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PagenotfoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
