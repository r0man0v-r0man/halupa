import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertsComponent } from './adverts.component';


const routes: Routes = [
  {
    path: '', component: AdvertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
