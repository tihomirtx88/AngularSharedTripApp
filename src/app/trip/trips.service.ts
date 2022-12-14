import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrip } from '../interfaces/trip';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getAllTrips(){
    let url = 'https://shared-trips-server.onrender.com/data/trips';
     return this.http.get<ITrip[]>(url);
  }

  getTrip(tripId: string){
    return this.http.get<ITrip>(`https://shared-trips-server.onrender.com/data/trips/${tripId}`);
  }

  getBudies(tripId: string){
    return this.http.get<IUser[]>(`https://shared-trips-server.onrender.com/data/trips/buddies/${tripId}`)
 }

  createTrip(start: string, end: string, date: string, time: string, carImg: string, carBrand: string, price: number, seats: number, description: string){
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.post<ITrip>('https://shared-trips-server.onrender.com/data/trips', {start: start, end: end, date: date, time: time, carImg: carImg, carBrand: carBrand, price: price, seats: seats, description: description}, {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': stringToken
      }
    });
  }

  update(tripId: string, start: string, end: string, date: string, time: string, carImg: string, carBrand: string, price: number, seats: number, description: string){
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.put<ITrip>(`https://shared-trips-server.onrender.com/data/trips/${tripId}`, {start: start, end: end, date: date, time: time, carImg: carImg, carBrand: carBrand, price: price, seats: seats, description: description}, {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': stringToken
      }
    });
  }

  joinToTrip(tripId: string, userId: string){
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.post<ITrip>(`https://shared-trips-server.onrender.com/data/join/${tripId}`, {tripId, userId} , {
       headers: {
         'Content-Type': 'application/json',
         'X-Authorization': stringToken
       }
    });
  }

  deleteTrip(tripId: string){
    const token = localStorage.getItem("accessToken")
    const stringToken = token ? token : ""
    return this.http.delete<ITrip>(`https://shared-trips-server.onrender.com/data/trips/${tripId}`, {
       headers: {
        'Content-Type': 'application/json',
        'X-Authorization': stringToken
       }
    });
  }
}
