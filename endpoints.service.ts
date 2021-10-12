import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http:HttpClient) { }

  createEmployee(creat: any){
    return this.http.post('http://localhost:1996/api/register',creat)
  }
}
