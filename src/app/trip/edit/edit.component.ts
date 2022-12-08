import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {

  constructor(private router: Router, private tripsService: TripsService,private authService: AuthService) { }

  // newTripHandler(form: NgForm): void{
  //   if(form.invalid){return;}
  //   const {start, end, date, time, carImg, carBrand, price, seats, description} = form.value;
  //   const tripId = this.authService.
    
  //   this.tripsService.update(start, end, date, time, carImg, carBrand, price, seats, description)
  //      .subscribe( (response) => {
  //         console.log(response)
  //         this.router.navigate(['/catalog']);
  //      });
  // }

}
