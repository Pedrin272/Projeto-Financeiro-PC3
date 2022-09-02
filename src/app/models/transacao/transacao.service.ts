import { Transacao } from './transacao.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;
const RECURSO = API+'/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService{

  constructor(
    private httpClient: HttpClient
  ){}

  selectAll(){
    return this.httpClient.get<Transacao[]>(RECURSO);
  }
  selectById(id: string) {
    return this.httpClient.get<Transacao>(RECURSO + '/' + id);
  }
  insert(transacao: Transacao) {
    return this.httpClient.post<Transacao>(RECURSO, transacao);
  }

  update(transacao: Transacao) {
    return this.httpClient.put<Transacao>(
      RECURSO + '/' + transacao.id,
      transacao
    );
  }
  isertOrUpdate(transacao: Transacao) {
    if (transacao && transacao.id) {
      return this.update(transacao);
    } else {
      return this.insert(transacao);
    }
  }
  delete(id: number) {
    return this.httpClient.delete<Transacao>(RECURSO + '/' + id);
  }

  // selectAll(){
  //   return [
  //     { id:1, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:2, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:3, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:4, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:5, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:6, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //   ] as Transacao[]
  // }

}
