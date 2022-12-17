import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ShortedPipe } from './shorted.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { TripModule } from '../trip/trip.module';

@NgModule({
  declarations: [
    LoaderComponent,
    ShortedPipe,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    ShortedPipe,
    FilterPipePipe
  ]
})
export class SharedModule { }
