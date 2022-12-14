import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent  {

  errorFetchingData = false;

  constructor(private router: Router, private tripsService: TripsService,private authService: AuthService) { }

  newTripHandler(form: NgForm): void{
    if(form.invalid){return;}
    const {start, end, date, time, carImg, carBrand, price, seats, description} = form.value;
    
    this.tripsService
    .createTrip(start, end, date, time, carImg, carBrand, price, seats, description)
    .pipe(
      catchError((err) => {
        return throwError(() => new Error(err.message));
      }),
    )
    .subscribe({
      next: (value) => {
        this.router.navigate(['/trips/catalog']);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },         
    });
  }

}
