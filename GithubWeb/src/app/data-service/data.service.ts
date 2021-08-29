import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Data } from '../data-class/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
users:any;
Username:any;
constructor( private http:HttpClient) { }
  showUser(user:any){
    return this.http.get("https://api.github.com/users/" + user + "?access_token=" + environment.apiUrl)
    .pipe(((response:any)=>response));
  }
  getProfileRepos(repo:any){
    return this.http.get("https://api.github.com/users/" + repo + "/repos?access_token=" + environment.apiUrl)
    .pipe(((response:any)=>response));
  }
  // private username:string;
  // private id:"47379472" | undefined;
  // constructor(private http:HttpClient) {
  //   console.log("service is ready");
  //   this.username = 'judyrop';
  //  }
  //  getProfileInfo(){
  //    return this.http.get("https://api.github.com/users/" +this.username +"?id=" + this.id);
  //  }
}
