import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent  {

  constructor() { }

  newTripHandler(form: NgForm): void{
    if(form.invalid){return;}
    console.log(form.value);
    
  }

}
