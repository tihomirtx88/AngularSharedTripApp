import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from '../trips.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  editForm = this.formBuild.group({
    start: [``, [Validators.required, Validators.minLength(4)]],
    end: [``, [Validators.required, Validators.minLength(4)]],
    date: [``, [Validators.required]],
    time: [``, [Validators.required]],
    carImg: [``, [Validators.required]],
    carBrand: [``,[Validators.required, Validators.minLength(4)]],
    seats: [null,[Validators.required, Validators.min(1), Validators.max(4)]],
    price: [null, [Validators.required, Validators.min(1), Validators.max(50)]],
    description: [``,[Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripsService,
    private router: Router,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {
    const tripId = this.activatedRoute.snapshot.paramMap.get('tripId');
    this.tripService.getTrip(tripId!).subscribe( (value: any) => {  
        this.editForm = this.formBuild.group({
          start: [value.start],
          end: new FormControl(value['end']),
          date: new FormControl(value['date']),
          time: new FormControl(value['time']),
          carImg: new FormControl(value['carImg']),
          carBrand: new FormControl(value['carBrand']),
          seats: new FormControl(value['seats']),
          price: new FormControl(value['price']),
          description: new FormControl(value['description']),
        });
      },
    );
  }

  EditFormHandler() {
    if (this.editForm.invalid) {
      return;
    }

    const { start, end, date, time, carImg, carBrand, price, seats, description } = this.editForm.value;

    const tripId = this.activatedRoute.snapshot.paramMap.get('tripId');

    this.tripService
      .update( tripId!, start!, end!, date!, time!, carImg!, carBrand!, price!, seats!, description! )
      .subscribe({
        next: (value) => {
          console.log(value, `from edit`);
          this.router.navigate(['/trips/catalog']);
        },
      });
  }
}
