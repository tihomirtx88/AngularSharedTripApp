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
  .pipe();

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      if (user) {
        this.user = user
      }
      
    });
  }

  setUser(user: IUser | null){
     this.user = user;
     this.user$$.next(user);
  }
  
  register( email: string, password: string, rePassword: string, gender: string ) {
    return this.http.post<IUser>('/users/register', { email, password, rePassword, gender,
    }).pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<any>('/users/login', { email, password })
    .pipe(tap(user => this.user$$.next(user))); 
  }

  getProfile() {
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.get<IUser>('http://localhost:3030/data/trips/profile', {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': stringToken
      }
    })
    .pipe(
      tap(user => this.user$$.next(user)),
      catchError((err) => {
        this.user$$.next(null)
        return of(err)
      })
     )
  }

  logout(){
    return this.http.post<void>('/users/logout', {})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
