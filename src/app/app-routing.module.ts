import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authCanLoadGuard, authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) ,canActivate:[authGuard]},
  { path: 'order', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) ,canActivate:[authGuard]},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) ,canActivate:[authGuard],canLoad:[authCanLoadGuard]},
  { path: 'carts',loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
