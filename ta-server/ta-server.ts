import express = require('express');
import bodyParser = require("body-parser");


import {Roteiro} from '../common/roteiro'
import {CadastroDeRoteiros} from './cadastroderoteiros';
import {Matricula} from '../common/matricula'
import { Turma } from '../common/turma'
import { Roteiro } from './roteiro';
import { BlocoDeQuestoes } from './blocodequestoes';
import { Questao } from './questao';
import { RespostaDeRoteiro } from './respostaderoteiro';
import { RespostaDeQuestao } from './respostadequestao';

var taserver = express();
// Stub para popular o front-end com alunos de uma turma
var stub_turma1 = new Turma();
var stub_turma2 = new Turma();
stub_turma1.descricao = "ESS";
stub_turma2.descricao = "Compiladores";
stub_turma1.metas = ["Requisitos", "Refatoração"];
stub_turma2.metas = ["Meta1", "Meta2"]
var stub_matricula1 = new Matricula();
var stub_matricula2 = new Matricula();
var stub_aluno1 = new Aluno();
var stub_aluno2 = new Aluno();
stub_aluno1.nome = "João";
stub_aluno1.cpf = "123";
stub_aluno1.email = "joao@cin.ufpe.br";
stub_aluno2.nome = "Maria";
stub_aluno2.cpf = "456";
stub_aluno2.email = "maria@cin.ufpe.br";
stub_matricula1.aluno = stub_aluno1;
stub_matricula2.aluno = stub_aluno2;
var stub_autoavaliacao1 = new Avaliacao();
var stub_autoavaliacao2 = new Avaliacao();
var stub_autoavaliacao3 = new Avaliacao();
var stub_autoavaliacao4 = new Avaliacao();
stub_autoavaliacao1.meta = "Requisitos";
stub_autoavaliacao1.nota = "";
stub_autoavaliacao2.meta = "Refatoração";
stub_autoavaliacao2.nota = "";
stub_autoavaliacao3.meta = "Requisitos";
stub_autoavaliacao3.nota = "MA";
stub_autoavaliacao4.meta = "Refatoração";
stub_autoavaliacao4.nota = "";
stub_matricula1.autoAvaliacoes = [stub_autoavaliacao1, stub_autoavaliacao2];
stub_matricula2.autoAvaliacoes = [stub_autoavaliacao3, stub_autoavaliacao4];
stub_turma1.matriculas = [stub_matricula1, stub_matricula2];
stub_turma2.matriculas = [stub_matricula2];
var sender = new EmailSender();


var turmas: Turmas = new Turmas();
turmas.turmas = [stub_turma1, stub_turma2];

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();
var cadastroRoteiro: CadastroDeRoteiros = new CadastroDeRoteiros();

const turmas: Turmas = new Turmas();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());


taserver.get('/roteiros', function (req: express.Request, res: express.Response){
  res.send(JSON.stringify(cadastroRoteiro.getRoteiros()));
})

taserver.post('/roteiro', function (req: express.Request, res: express.Response) {
  var roteiro: Roteiro = <Roteiro> req.body;
  roteiro = cadastroRoteiro.cadastrarRoteiro(roteiro);
  if (roteiro) {
    res.send({"success": "O roteiro foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O roteiro não pode ser cadastrado"});
  }
})

taserver.put('/roteiro', function (req: express.Request, res: express.Response) {
  var roteiro: Roteiro = <Roteiro> req.body;
  roteiro = cadastroRoteiro.atualizarRoteiro(roteiro);
  if (roteiro) {
    res.send({"success": "O roteiro foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O roteiro não pode ser atualizado"});
  }
})

taserver.delete('/roteiro/:descricao', function (req: express.Request, res: express.Response) {
  var descricao: string = <string> req.params.descricao;
  descricao = cadastroRoteiro.removerRoteiro(descricao);
  if (descricao) {
    res.send({"success": "O roteiro foi removido com sucesso"});
  } else {
    res.send({"failure": "O roteiro não pode ser removido"});
  }
})

taserver.get('/comparacao-de-desempenho', function (req: express.Request, res: express.Response) {
    const descricoes: string[] = req.query.turmas.split(',');
    res.send(JSON.stringify(turmas.getResumos(descricoes)));
});

var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

function closeServer(): void {
    server.close();
}

export { server, closeServer }
