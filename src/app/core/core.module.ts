import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../trip/home/home.component';
import { HeaderComponent } from './header/header.component';
import { TripModule } from '../trip/trip.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TripModule,
    SharedModule
  ],
  exports: [
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }
