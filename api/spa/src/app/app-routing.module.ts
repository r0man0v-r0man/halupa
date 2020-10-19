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
        title: 'Halupa.by - Сайт о продаже недвижимости №1 в Беларуси',
        description: 'Сайт о продаже недвижимости. Halupa.by - ваш помошник в поиске квартиры или дома для покупки. Объявления от собственника. Удобный поиск и простота размещения объявления - это halupa.by'
      }
    },
    {
      path: 'adverts',
      loadChildren: () => import('./pages/adverts/adverts.module').then(m => m.AdvertsModule),
      data: {
        title: 'Halupa.by - Объявления',
        description: 'Объявления о продаже квартир и домов от собственника, без посредников'
      }
    },
    {
      path: 'adverts/:id',
      loadChildren: () => import('./pages/advert/advert.module').then(m => m.AdvertModule),
      data: {
        title: 'Halupa.by - Подробная информация об обяъвлении',
        description: 'Информация об объявлении, номера телефонов, фотографии и координаты места'
      }
    },
    {
      path: 'cabinet',
      loadChildren: () => import('./pages/cabinet/cabinet.module').then(m => m.CabinetModule),
      data: {
        title: 'Halupa.by - Кабинет',
        description: 'Кабинет пользователя',
        robots: 'noindex, nofollow'
      }
    },
    {
      path: 'add',
      loadChildren: () => import('./pages/add/add.module').then(m => m.AddModule),
      data: {
        title: 'Halupa.by - Добавить объявление',
        description: 'Добавить объявление',
        robots: 'noindex, nofollow'
      }
    },
    {
      path: 'register',
      loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
      data: {
        title: 'Halupa.by - Регистрация',
        description: 'Регистрация нового пользователя',
        robots: 'noindex, nofollow'
      }
    },
    {
      path: '**',
      redirectTo: '/not-found'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
  })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }