import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {

  trips!: ITrip[] | [];
  errorFetchingData = false;
  totalLength!: number;
  page: number = 1;

  constructor(private tripService: TripsService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.tripService
      .getAllTrips()
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err.message));
        }),
      )
      .subscribe({
        next: (trips) => {         
          this.trips = trips;
          this.totalLength = trips.length;
          console.log(trips);
          
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.log(err);
        },
      });
  }
}
