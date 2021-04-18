import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './Auth/auth.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ]
})
export class StateModule { }