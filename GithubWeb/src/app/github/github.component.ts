import { Component, OnInit } from '@angular/core';

import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  showProfile:any;
  showUserName(){
    this.service.showUser(this.user).subscribe(profile => {
      console.log(profile)
      return this.showProfile = profile;
    });
  }
  constructor( private service:DataService ) {  }
   

  

  ngOnInit() {
  }
  
  
}

