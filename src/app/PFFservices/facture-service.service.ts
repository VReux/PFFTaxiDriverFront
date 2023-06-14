import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../PFFmodel/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private BASE_URL = "http://localhost:9090/factures";
  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }

  public save(facture: Facture): Observable<any> {
    return this.httpClient.post(this.BASE_URL, facture);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
  }
}
