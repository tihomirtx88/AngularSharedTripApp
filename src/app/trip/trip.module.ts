import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { TripDetailsComponent } from './details/trip-details.component';
import { CreateTripComponent } from './create/create-trip.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TripRoutingModule } from './trip-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MainComponent,
    EditComponent,
    TripDetailsComponent,
    CreateTripComponent,
    CatalogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
    EditComponent,
    TripDetailsComponent,
    CreateTripComponent,
    CatalogComponent,
    HomeComponent
  ]
})
export class TripModule { }
