import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Products } from './products';


const API = environment.urlApi;
const PRODUCTS = API+'/produto';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }
  selectAll(){
    return this.httpClient.get<Products[]>(PRODUCTS);
  }
  postObj(obj: Products){
    return this.httpClient.post(PRODUCTS, {
      obj
    });
  }
}
