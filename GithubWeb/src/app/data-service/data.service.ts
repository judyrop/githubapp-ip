import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Data } from '../data-class/data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private username:string;
  private clientkey :"";
  static getData: any;
  

  constructor(private http :HttpClient) {
    this.data = new Data('string',"");
   }
}
