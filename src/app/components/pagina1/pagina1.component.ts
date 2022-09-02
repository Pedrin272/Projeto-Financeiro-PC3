import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products/products';
import { ProductsService } from 'src/app/models/products/products.service';
import { PageDialogComponent } from '../page-dialog/page-dialog.component';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  produtos: Products[] = [];
  displayedColumns: string[] = ['id', 'nome', 'valorVenda', 'estoque'];
  dataSource: any;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

      let that = this;

      this.productsService.selectAll().subscribe(
        {
          next(produtos){
            console.log(produtos);
            that.dataSource = new MatTableDataSource(produtos);
          },
          error(err){
            console.error(err);
          },
          complete(){
            console.log("requisição completa");
          }
        }
      );
  }
  onAdd(){
    this.dialog.open( PageDialogComponent, {
      width: '500px',
      height: '500px',
    });
  }
  onDelete(){

  }

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
