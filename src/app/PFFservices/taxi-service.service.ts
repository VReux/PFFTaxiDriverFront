import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxi } from '../PFFmodel/taxi';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  private BASE_URL = "http://localhost:9090/taxis";  
  constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any>{ 
    return this.httpClient.get(this.BASE_URL);
  }


  public save(taxi:Taxi):Observable<any>{
    return this.httpClient.post(this.BASE_URL,taxi);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }

  public update(taxi:any):Observable<any>{
    var taxiJSON = JSON.parse(taxi);
    return this.httpClient.put(this.BASE_URL+'/'+taxiJSON.idTaxi,taxiJSON);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
}

