import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

      user:any;
      showProfile:any;
      repos:any;
      repodetails:any;
      showUserName(){
        this.service.showUser(this.user).subscribe(profile => {
          console.log(profile)
          return this.showProfile = profile;
        });
      }
      getRepository(){
        this.service.getProfileRepos(this.user).subscribe(data=>{
          console.log("greetings" + data)
          return this.repos = data;
        });
      }
  
       
    
  constructor(private service:DataService ) { }

  ngOnInit(): void {
  }

}
