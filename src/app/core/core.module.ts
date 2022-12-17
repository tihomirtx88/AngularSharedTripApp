import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from '../auth/search/search.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
