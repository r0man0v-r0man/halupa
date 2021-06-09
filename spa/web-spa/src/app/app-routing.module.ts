import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
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
      description: 'Сайт о продаже недвижимости. Halupa.by - ваш помошник в поиске дома для покупки. Актуальные объявления от собственников. Удобный поиск и простота размещения вашего объявления.'
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
    },
    canActivate: [AuthGuardService] 
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then(m => m.AddModule),
    data: {
      title: 'Halupa.by - Добавить объявление',
      description: 'Добавить объявление',
      robots: 'noindex, nofollow'
    },
    canActivate: [AuthGuardService] 
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }