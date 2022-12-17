import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ITrip } from 'src/app/interfaces/trip';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  errorFetchingData = false;
  profileTrips: ITrip[] | null = null;
  isMale = false;
  isFemale = false;
  thereIsNotAnyTrips = false;
  currentUser: IUser | null = null;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.user;
    
    if (this.authService.user?.gender == `male`) {
      this.isMale = true;
    }

    if (this.authService.user?.gender == `female`) {
      this.isFemale = true;
    }
  }

  ngOnInit(): void {
    this.authService.getProfile()
    .pipe(
      catchError((err) => {
        return throwError(() => new Error(err.message));
      }),
    )
    .subscribe({
      next: (value) => {
        this.profileTrips = value;
        
        if (this.profileTrips?.length! == 0) {
           this.thereIsNotAnyTrips = true;
        }
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }
}
