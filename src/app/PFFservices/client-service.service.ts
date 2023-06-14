import { Injectable } from '@angular/core';
import { Client } from '../PFFmodel/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
  
  private BASE_URL = "http://localhost:9090/clients";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  
  public save(client:Client):Observable<any>{
    return this.httpClient.post(this.BASE_URL,client);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }

  public update(client:any):Observable<any>{
    var clientJSON = JSON.parse(client);
    return this.httpClient.put(this.BASE_URL+'/'+clientJSON.idUtilisateur,clientJSON);
    }

}
