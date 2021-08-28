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
  dataService: DataService = new DataService;
  data!: Data;
  constructor(dataService:DataService, private http :HttpClient) { 
    this.data=new DataService.getData()
  }

  ngOnInit() {
    interface ApiResponse{
  login:string;
      repos_url:string;
    }

    this.http.get<ApiResponse>("https://docs.github.com/en/rest/reference/users").subscribe(data=>{
      // Succesful API request
      this.data = new Data(data.login, data.repos_url)
    })
  }
  
  
}

