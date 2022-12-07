import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy{

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$
  .asObservable()
  .pipe(filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user
    });
  }
  
  register( email: string, password: string, rePassword: string, gender: string ) {
    return this.http.post<IUser>('/users/register', { email, password, rePassword, gender,
    }).pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('/users/login', { email, password })
    .pipe(tap(user => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<IUser>('/data/trips/profile')
    .pipe(
      tap(user => this.user$$.next(user)),
      catchError((err) => {
        this.user$$.next(null)
        return of(err)//или [err] също става
      })
     );
  }

  logout(){
    return this.http.post<void>('/users/logout', {})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
