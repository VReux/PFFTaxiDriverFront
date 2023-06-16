import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chauffeur } from '../PFFmodel/chauffeur';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  
  private BASE_URL = "http://localhost:9090/chauffeurs";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  
  public save(chauffeur:Chauffeur):Observable<any>{
    return this.httpClient.post(this.BASE_URL,chauffeur);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }

  public update(chauffeur:any):Observable<any>{
    var chauffeurJSON = JSON.parse(chauffeur);
    return this.httpClient.put(this.BASE_URL+'/'+chauffeurJSON.idUtilisateur,chauffeurJSON);
 //return this.httpClient.put(this.BASE_URL,chauffeurJSON);
    }
}
