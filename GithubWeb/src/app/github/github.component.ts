import { Component, OnInit } from '@angular/core';
import { Data } from '../data-class/data';
import { DataService } from '../data-service/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  
   constructor(private dataService:DataService) {
     this.dataService.getProfileInfo().subscribe(data=>(
       console.log(data)
     )) ;
  
  }

  ngOnInit() {
  }
  
  
}

