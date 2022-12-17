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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { SearchComponent } from '../auth/search/search.component';
import { AuthModule } from '../auth/auth.module';




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
    TripRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
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
