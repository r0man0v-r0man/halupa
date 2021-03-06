import { StateModule } from './store/state.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularYandexMapsModule, IConfig } from 'angular8-yandex-maps';
import { AuthGuardService } from './services/auth-guard.service';
const mapConfig: IConfig = {
  apikey: '85e03f02-25be-40b3-971e-733f2a03e620',
  lang: 'ru_RU',
  coordorder: 'latlong'
};

registerLocaleData(ru);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularYandexMapsModule.forRoot(mapConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    StateModule
  ],
  providers: [
    Title,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
