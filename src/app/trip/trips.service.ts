import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrip } from '../interfaces/trip';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getAllTrips(maxCount?: number){
    let url = 'http://localhost:3030/data/trips';
    if (maxCount) {
      url += '?limit=10';
    }
     return this.http.get<ITrip[]>(url);
  }

  getTrip(id: string){
    return this.http.get<ITrip>('http://localhost:3030/data/trips' + id);
  }

  createTrip(name: string, text: string){
    return this.http.post<ITrip>('http://localhost:3030/data/trips', {themeName: name, themeText: text});
  }
  // TODO INPUT

  changeTrip(id: string, name: string, text: string){
    return this.http.put<IUser>('http://localhost:3030/data/trips' + id, {themeName: name, themeText: text});
  }
  // TODO INPUT

  deleteTrip(id: string){
    return this.http.delete<IUser>('http://localhost:3030/data/trips' + id);
  }
}
