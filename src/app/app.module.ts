import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WebpackTranslateLoader } from './app.translate.loader';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiModule } from '@ronas-it/angular-common';
import { configuration } from '@configurations';
import { NavbarModule } from '@shared/navbar';
import { jwtOptionsFactory, UserEffects, UserModule, userReducer } from '@shared/user';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer,
      userState: userReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
      logOnly: false
    }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Store]
      }
    }),
    ApiModule.forRoot({
      apiUrl: configuration.api.url
    }),
    UserModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
