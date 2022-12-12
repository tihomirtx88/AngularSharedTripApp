import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ITrip } from 'src/app/interfaces/trip';
import { IUser } from 'src/app/interfaces/user';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {

  currentTrip: ITrip | null = null;
  currentTripBudies: IUser[] | null= null;
  errorFetchingData = false;
  haveCurrrentUser = false;
  thereIsFreeSeats = false;
  isAllReadyJoinInTrip = false;
  isCreator = false;
  tripAuthor: any;
  userId: any;
  isThereAnybudies = false;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
     this.loadTrip();
     this.loadBudies();
  }

  loadTrip(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    if (this.authService.isLoggedIn) {
      this.haveCurrrentUser = true;
    }
  
    this.tripService.getTrip(tripId!).subscribe({
        next: (value) => {
           this.currentTrip = value;       
           this.userId = this.authService.user?._id;
           this.tripAuthor = value.owner;
           if (this.userId == this.tripAuthor)  {
             this.isCreator = true;
           }
           if (this.currentTrip.buddies.length > 0) {
               this.isThereAnybudies = true;
           }
           if (this.currentTrip.seats > 0) {
              this.thereIsFreeSeats = true;
           }
           if (this.currentTrip.buddies.includes(this.authService.user!._id)) {
            this.isAllReadyJoinInTrip = true;
         }
        },
        error: (err) => {
          this.errorFetchingData = true;
        }
    });
  }

  loadBudies(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    this.tripService.getBudies(tripId!).subscribe({
      next: (value) => {
         this.currentTripBudies = value;     
      },
      error: (err) => {
        this.errorFetchingData = true;
      }
    })
  }

  onJoinEvent(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    this.userId = this.authService.user?._id;
    
    this.tripService.joinToTrip(tripId!, this.userId!).subscribe({
      next: (value) => {
         console.log(value, `from join event`);
         
      }
    });
  }
}
