import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularYandexMapsModule, IConfig } from 'angular8-yandex-maps';
import { AuthGuardService } from './services/auth-guard.service';
import { MetrikaModule } from 'ng-yandex-metrika';
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
    MetrikaModule.forRoot({
      id:66772048, 
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor:true
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  providers: [
    Title,
    AuthGuardService,
    { 
      provide: NZ_I18N, useValue: ru_RU 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
