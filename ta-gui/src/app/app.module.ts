import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparacaoDeDesempenhoComponent } from './comparacao-de-desempenho/comparacao-de-desempenho.component';
import { TurmasComponent } from './turmas/turmas.component';
import { MetasComponent } from './metas/metas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AutoavaliacaoComponent } from './autoavaliacao/autoavaliacao.component';
import { MonitoresComponent } from './monitores/monitores.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { RoteiroService } from './roteiros/roteiro.service';
import { DiscrepantesComponent } from './discrepantes/discrepantes.component';
import { DiscrepantesService } from '../app/discrepantes/discrepantes.service';
import { HttpClientModule } from '@angular/common/http';

import { AutoavaliacaoService } from './autoavaliacao/autoavaliacao.service';
import { AlunoService } from './alunos/alunos.service';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioService } from './relatorio/relatorio.service';
import { ComparacaoDeDesempenhoService } from './comparacao-de-desempenho/comparacao-de-desempenho.service';

@NgModule({
  declarations: [ 
    AppComponent,
    ComparacaoDeDesempenhoComponent,
    TurmasComponent,
    MetasComponent,
    AlunosComponent,
    AutoavaliacaoComponent,
    MonitoresComponent,
    RoteirosComponent,
    DiscrepantesComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{

      path: 'metas',
      component: MetasComponent
    },
    {
      path:'alunos',
      component: AlunosComponent
    },
    {
      path: 'auto-avaliacao',
      component: AutoavaliacaoComponent
    },
    {
      path: 'turmas',
      component: TurmasComponent
    },
    {
      path: 'roteiros',
      component: RoteirosComponent
    },
    {
      path: 'discrepantes',
      component: DiscrepantesComponent
    },
    {
      path: 'relatorio',
      component: RelatorioComponent
    },
    {
      path: 'comparacao-de-desempenho',
      component: ComparacaoDeDesempenhoComponent
    }
  ])
  ],
  providers: [RoteiroService, DiscrepantsService, AutoavaliacaoService, AlunoService, RelatorioService, ComparacaoDeDesempenhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
