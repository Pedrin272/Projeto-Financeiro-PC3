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
    return this.httpClient.post<Products>(PRODUCTS,obj);
  }
  selectById(id: string) {
    return this.httpClient.get<Products>(PRODUCTS + '/' + id);
  }

  insert(transacao: Products) {
    return this.httpClient.post<Products>(PRODUCTS, transacao);
  }
  update(transacao: Products) {
    return this.httpClient.put<Products>(
      PRODUCTS + '/' + transacao.id,
      transacao
    );
  }
  isertOrUpdate(transacao: Products) {
    if (transacao && transacao.id) {
      return this.update(transacao);
    } else {
      return this.insert(transacao);
    }
  }
  delete(id: number) {
    return this.httpClient.delete<Products>(PRODUCTS + '/' + id);
  }
}
