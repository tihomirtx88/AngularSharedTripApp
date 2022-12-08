import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITrip } from 'src/app/interfaces/trip';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  tripList: ITrip[] | null = null;
  errorFetchingData = false;
  maxCount = 6;

  constructor(private tripService: TripsService, private router: Router) {}

  ngOnInit(): void {
    this.tripService.getAllTrips(this.maxCount).subscribe({
      next: (value) => {
        this.tripList = value;
        
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }
}
