import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITrip } from './interfaces/trip';

const apiUrl = environment.APIURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadTrips(){
    const trips = this.httpClient.get<ITrip[]>(`${apiUrl}/data/trips`);
    return trips;
    console.log(trips);
    
  }
  

  loadTrip(id:number){
    return this.httpClient.get<ITrip>(`${apiUrl}/data/trips/${id}`);
  }
}
