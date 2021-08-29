import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
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
  getProfileRepos(repolink:any){
    return this.http.get(environment.githubUrl + repolink + environment.connector + "?access_token=" + environment.apiUrl)
    .pipe(((response:any)=>response));
  }
  
}
