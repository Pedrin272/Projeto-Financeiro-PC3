import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent implements OnInit {
  Form = this.formBuilder.group({
    id: new FormControl<string>('', { nonNullable: true }),
    nome: new FormControl<string>('', { nonNullable: true }),
    valorVenda: new FormControl<number>(0, { nonNullable: true }),
    estoque: new FormControl<number>(0, { nonNullable: true }),
    // ('', { nonNullable: true }) só isso o Ts já entende
  });
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProdutoFormComponent>,
    private router: Router
  ) {}
  ngOnInit(): void {}

  navegarPara(rota: any[]) {
    this.router.navigate(rota);
  }
}
