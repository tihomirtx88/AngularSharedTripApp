import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from 'src/app/trip/trips.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  totalLength!: number;
  page: number = 1;

  public searchTerm: string =  '';
  searchKey: string = '';
  trips!: ITrip[] | [];

  constructor(
    private tripService: TripsService,
    private authService: AuthService,
  ) {}

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
      },
    });

     this.authService.search$$.subscribe((value:any) => {
          this.searchKey = value;
      });
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.authService.search$$.next(this.searchTerm);  
  }
}
