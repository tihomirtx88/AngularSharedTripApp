import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
// import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { TripModule } from './trip/trip.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // AuthModule,
    // TripModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
