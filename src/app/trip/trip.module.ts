import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { TripDetailsComponent } from './details/trip-details.component';
import { CreateTripComponent } from './create/create-trip.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TripRoutingModule } from './trip-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    EditComponent,
    TripDetailsComponent,
    CreateTripComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    TripRoutingModule
  ],
  exports: [
    MainComponent,
    EditComponent,
    TripDetailsComponent,
    CreateTripComponent,
    CatalogComponent,
  ]
})
export class TripModule { }
