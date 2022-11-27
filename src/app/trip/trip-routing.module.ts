import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activated';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateTripComponent } from './create/create-trip.component';
import { TripDetailsComponent } from './details/trip-details.component';


const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Shared Trips Page',
      loginRequired: false,
    },
  },
  {
    path: 'create',
    component: CreateTripComponent,
    canActivate: [AuthActivate],
    data: {
        title: 'Create Trip Page',
        loginRequired: false,
      },
  },
  {
    path: 'catalog/details/:id',
    component: TripDetailsComponent,
    canActivate: [AuthActivate],
    data: {
        title: 'Trip Details Page',
        loginRequired: true,
      },
  },
];

export const TripRoutingModule = RouterModule.forChild(routes);
