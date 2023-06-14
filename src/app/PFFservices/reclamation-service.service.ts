import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../PFFmodel/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private BASE_URL = "http://localhost:9090/reclamations";  
  constructor(private httpClient:HttpClient) { }
  // GET //
  public findAll():Observable<any>{ 
    return this.httpClient.get(this.BASE_URL);
  }
  // POST //
  public save(reclamation:Reclamation):Observable<any>{
    return this.httpClient.post(this.BASE_URL,reclamation);
  }
  // DELETE //
  public delete(idReclamation:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+idReclamation);
  }
  // GET BY ID //
  public findOne(idReclamation:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+idReclamation);
  }
  // PUT //
  public update(reclamation:any):Observable<any>{
    var reclamationJSON = JSON.parse(reclamation);
    return this.httpClient.put(this.BASE_URL+'/'+reclamationJSON.idReclamation,reclamationJSON);
  }
}
