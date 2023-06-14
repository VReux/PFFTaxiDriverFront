import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../PFFmodel/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private BASE_URL = "http://localhost:9090/roles";
  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<any> {
    return this.httpClient.get(this.BASE_URL);
  }
  public save(role: Role): Observable<any> {
    return this.httpClient.post(this.BASE_URL, role);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
  }
}
