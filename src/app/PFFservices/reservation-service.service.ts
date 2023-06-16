import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../PFFmodel/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private BASE_URL = "http://localhost:9090/reservations";
  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }

  public save(reservation:Reservation):Observable<any>{
    return this.httpClient.post(this.BASE_URL,reservation);
  }

  public delete(idReservation:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+idReservation);
  }
  public findOne(idReservation:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+idReservation);
  }

  public update(reservation:any):Observable<any>{
    var reservationJSON = JSON.parse(reservation);
    return this.httpClient.put(this.BASE_URL+'/'+reservationJSON.idReservation,reservationJSON);
  }

  public findByHeureDepart(heureDepart:Date):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/search/'+heureDepart);
  }
 
}
