import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-dialog',
  templateUrl: './page-dialog.component.html',
  styleUrls: ['./page-dialog.component.scss'],
})
export class PageDialogComponent implements OnInit {
  Form = this.formBuilder.group({
    id: new FormControl<string>('', { nonNullable: true }),
    nome: new FormControl<string>('', { nonNullable: true }),
    valorVenda: new FormControl<number>(0, { nonNullable: true }),
    estoque: new FormControl<number>(0, { nonNullable: true }),
    // ('', { nonNullable: true }) só isso o Ts já entende
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
