import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../PFFmodel/agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private BASE_URL = "http://localhost:9090/agences";  
  constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any>{ 
    return this.httpClient.get(this.BASE_URL);
  }

  public save(agence:Agence):Observable<any>{
    return this.httpClient.post(this.BASE_URL,agence);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }

  public update(agence:any):Observable<any>{
    var agenceJSON = JSON.parse(agence);
    return this.httpClient.put(this.BASE_URL+'/'+agenceJSON.idAgence,agenceJSON);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
}
