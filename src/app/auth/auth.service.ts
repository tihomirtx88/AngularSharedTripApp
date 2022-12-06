import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) {}

  register(
    email: string,
    password: string,
    rePassword: string,
    gender: string
  ) {
    return this.http.post<IUser>('/users/register', {
      email,
      password,
      rePassword,
      gender,
    });
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('/users/login', { email, password });
  }

  getProfile() {
    return this.http.get<IUser>('/data/trips/profile')
  }

  logout(){
    return this.http.post<void>('/users/logout', {})
  }
}
