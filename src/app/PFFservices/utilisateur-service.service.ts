import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../PFFmodel/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private BASE_URL = "http://localhost:9090/utilisateurs";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  
  public save(utilisateur:Utilisateur):Observable<any>{
    return this.httpClient.post(this.BASE_URL,utilisateur);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }

  public update(utilisateur:any):Observable<any>{
    var utilisateurJSON = JSON.parse(utilisateur);
    return this.httpClient.put(this.BASE_URL+'/'+utilisateurJSON.idUtilisateur,utilisateurJSON);
    }

    // Etape 5 : (recherche)
  public findByNom(nom:string):Observable<any>{
      return this.httpClient.get(this.BASE_URL+'/test/'+nom);
    }
}
