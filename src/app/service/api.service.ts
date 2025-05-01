import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpUrl ='http://localhost:3000'

  constructor(private http : HttpClient) { }
    getProducts() {
     return this.http.get(`${this.httpUrl}/products`)
  }
  getProductById(id: any) {
    return this.http.get(`${this.httpUrl}/products/${id}`);
  }
  
  

}
