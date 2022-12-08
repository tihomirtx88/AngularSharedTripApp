import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {

  currentTrip: ITrip | null = null;
  errorFetchingData = false;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripsService,
  ) {}

  ngOnInit(): void {
     this.loadTrip();
  }

  loadTrip(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    console.log(tripId);
    console.log(typeof(tripId));
    this.tripService.getTrip(tripId!).subscribe({
        next: (value) => {
           this.currentTrip = value;
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.log(err);
        }
    });
  }
}
