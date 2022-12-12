import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent  {

  constructor(private router: Router, private tripsService: TripsService,private authService: AuthService) { }

  newTripHandler(form: NgForm): void{
    if(form.invalid){return;}
    const {start, end, date, time, carImg, carBrand, price, seats, description} = form.value;
    
    this.tripsService.createTrip(start, end, date, time, carImg, carBrand, price, seats, description)
       .subscribe( (response) => {
          this.router.navigate(['/trips/catalog']);
       });
  }

}
