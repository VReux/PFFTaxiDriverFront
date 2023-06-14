import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../PFFmodel/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private BASE_URL = "http://localhost:9090/courses";  
  constructor(private httpClient:HttpClient) { }
  // GET //
  public findAll():Observable<any>{ 
    return this.httpClient.get(this.BASE_URL);
  }
  // POST //
  public save(course:Course):Observable<any>{
    return this.httpClient.post(this.BASE_URL,course);
  }
  // DELETE //
  public delete(idCourse:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+idCourse);
  }
  // GET BY ID //
  public findOne(idCourse:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+idCourse);
  }
  // PUT //
  public update(course:any):Observable<any>{
    var courseJSON = JSON.parse(course);
    return this.httpClient.put(this.BASE_URL+'/'+courseJSON.idCourse,courseJSON);
  }
}
