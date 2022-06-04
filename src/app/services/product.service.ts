import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProducts(val:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?categoryId="+val)
  }
}
