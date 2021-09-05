import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// import { Component, OnInit } from '@angular/core';

// import { DataService } from '../data-service/data.service';

// @Component({
//   selector: 'app-github',
//   templateUrl: './github.component.html',
//   styleUrls: ['./github.component.css']
// })
// export class GithubComponent implements OnInit {
//   user:any;
//   showProfile:any;
//   repos:any;
//   repodetails:any;
//   showUserName(){
//     this.service.showUser(this.user).subscribe(profile => {
//       console.log(profile)
//       return this.showProfile = profile;
//     });
//   }
//   getRepository(){
//     this.service.getProfileRepos(this.user).subscribe(data=>{
//       console.log("greetings" + data)
//       return this.repos = data;
//     });
//   }
//   constructor( private service:DataService ) {  }
   

  

//   ngOnInit() {
//   }
  
  
// }

