import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  authenticated=false;
  responseAll: any;


  //definition des 4 roles de l'appli :
  isAdmin = false;
  isChauffeur = false;
  isRespAgence = false;
  isClient = false;

  constructor(private httpClient:HttpClient) { }

  authenticate(credentials:any,callback:any){
    const headersTaxiDriver= new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username+ ':' +credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:9090/login/user',{headers:headersTaxiDriver}).subscribe(response => {
      this.responseAll = response; 
      console.log("responseAll="+this.responseAll);
      if(this.responseAll['username']){
        this.authenticated = true;
        
        // vérification des profils :
        for(let i=0;i<this.responseAll['roles'].length;i++){
          if(this.responseAll['roles'][i]['idRole']==1){
            this.isAdmin = true;
          }
          if(this.responseAll['roles'][i]['idRole']==2){
            this.isRespAgence = true;
          }
          if(this.responseAll['roles'][i]['idRole']==3){
            this.isChauffeur = true;
          }
          if(this.responseAll['roles'][i]['idRole']==4){
            this.isClient = true;
          }
        }
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    })
  }
  
}
