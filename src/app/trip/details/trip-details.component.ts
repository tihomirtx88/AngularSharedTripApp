import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ITrip } from 'src/app/interfaces/trip';
import { IUser } from 'src/app/interfaces/user';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ]),
    trigger('popDescriptionState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class TripDetailsComponent implements OnInit {

  showStartEnd = false;
  showDescriptionInfo = false;
  currentTrip: ITrip | null = null;
  currentTripId!: string;
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
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
     this.loadTrip();
     this.loadBudies();
  }

  get stateName(){
    return this.showStartEnd ? 'show' : 'hide';
  }

  get stateDescription(){
    return this.showDescriptionInfo ? 'show' : 'hide';
  }

  toggleStartEnd(){
    this.showStartEnd = !this.showStartEnd;
  }

  toggleDescriptionHandler(){
    this.showDescriptionInfo = !this.showDescriptionInfo;
  }

  loadTrip(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    if (this.authService.isLoggedIn) {
      this.haveCurrrentUser = true;
    }
  
    this.tripService.getTrip(tripId!).subscribe({
        next: (value) => {
           
           this.currentTrip = value; 
           this.currentTripId = this.currentTrip._id            
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
           if (this.currentTrip!.buddies.includes(this.authService.user!._id)) {
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
         this.isAllReadyJoinInTrip = true;     
      }
    });
  }

  onDeleteEvent(){
    const tripId = this.activatedRoute.snapshot.paramMap.get("tripId");
    const confirmation = window.confirm("Are you sure you want to delete this trip?");

    if (confirmation) {
      this.tripService.deleteTrip(tripId!).subscribe({
        next: (value) => {
           this.router.navigate(['/'])        
        }
      });
    }
  }
}
