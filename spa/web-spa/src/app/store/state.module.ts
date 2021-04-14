import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ]
})
export class StateModule { }