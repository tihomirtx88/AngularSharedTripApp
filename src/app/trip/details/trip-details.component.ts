import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, pluck, tap } from 'rxjs';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripsService,
  ) {}

  ngOnInit(): void {
    // this.tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    // this.currentTrip = this.tripService.getTrip(this.tripId); 
    this.loadTrip();
  }

  loadTrip(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    console.log(tripId);
    console.log(typeof(tripId));
    
    this.tripService.getTrip(tripId)
  }
}
