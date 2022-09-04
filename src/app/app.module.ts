import { NgModule } from '@angular/core';
import { MaterialExampleModule } from 'src/material.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    PaginaPrincipalComponent,
    ProdutoFormComponent,
  ],
  imports: [
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
