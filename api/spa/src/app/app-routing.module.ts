import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    { 
      path: 'home', 
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      data: {
        hideComponents: false,
        title: 'Halupa.by - Сайт о продаже недвижимости №1 в Беларуси',
        description: 'Сайт о продаже недвижимости. Halupa.by - ваш помошник в поиске квартиры или дома для покупки. Объявления от собственника. Удобный поиск и простота размещения объявления - это halupa.by'
      }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
  })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }