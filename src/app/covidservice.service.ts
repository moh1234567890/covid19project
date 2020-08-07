import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http:HttpClient) { }
  getStatus(){
    let obs=this.http.get("https://api.covid19india.org/data.json");
    return obs;
  }
  loginUser(data:any){
    console.log(data);
    return this.http.post("http://localhost:9000/login/user",data);
   }
}
