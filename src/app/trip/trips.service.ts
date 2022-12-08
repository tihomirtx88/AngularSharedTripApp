import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrip } from '../interfaces/trip';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getAllTrips(maxCount?: number){
    let url = 'http://localhost:3030/data/trips?limit=6';
    // if (maxCount) {
    //   url += '?limit=6';
    // }
     return this.http.get<ITrip[]>(url);
  }

  getTrip(tripId: string){
    return this.http.get<ITrip>('http://localhost:3030/data/trips' + tripId);
  }

  createTrip(start: string, end: string, date: string, time: string, carImg: string, carBrand: string, price: number, seats: number, description: string){
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.post<ITrip>('http://localhost:3030/data/trips', {start: start, end: end, date: date, time: time, carImg: carImg, carBrand: carBrand, price: price, seats: seats, description: description}, {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': stringToken
      }
    });
  }

  update(tripId: string, start: string, end: string, date: string, time: string, carImg: string, carBrand: string, price: number, seats: number, description: string){
    return this.http.put<ITrip>('http://localhost:3030/data/trips' + tripId, {start: start, end: end, date: date, time: time, carImg: carImg, carBrand: carBrand, price: price, seats: seats, description: description});
  }
  // TODO INPUT

  deleteTrip(id: string){
    return this.http.delete<IUser>('http://localhost:3030/data/trips' + id);
  }
}
