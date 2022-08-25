import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// };

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  transacoes: Transacao[] = [];

  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo'];
  dataSource: any;

  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
  ) { }

  ngOnInit() {

    let that = this;

    this.transacaoService.selectAll().subscribe(
      {
        next(transacoes){
          console.log(transacoes);
          that.dataSource = new MatTableDataSource(transacoes);
        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("requisição completa");
        }
      }
    );



    // let transacao1: Transacao = {
    //   id:1,
    //   ativo: true,
    //   createdAt: "2022-08-18",
    //   updatedAt: "2022-08-18",
    //   descricao: "teste",
    //   valor: 100,
    //   saldo: 200,
    //   tipo: "ENTRADA"
    // };


  }


  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
