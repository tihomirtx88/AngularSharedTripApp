import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CreateTripComponent } from './trip/create/create-trip.component';
import { HomeComponent } from './trip/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
  // {
  //   path: 'create',
  //   component: CreateTripComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
