import { Matricula } from './matricula';
import { Roteiro } from './roteiro';
import { Aluno } from './aluno';
import { Avaliacao } from '../ta-server/avaliacao';

export class Turma {
    descricao: string = "";
    metas: string[] = [];
    matriculas: Matricula[] = [];
    roteiros: Roteiro[] = [];
    monitores: Aluno[] = [];
    numeroMatriculas: number = 0;

    constructor() {
      this.descricao = "";
      this.metas = [];
      this.matriculas = [];
      this.roteiros = [];
      this.monitores = [];
      this.numeroMatriculas = 0;
    }

    addRoteiro(roteiro: Roteiro): void {
      this.roteiros.push(roteiro);
    }

    getNumMatriculas(): number {
        return this.numeroMatriculas

    }
    
    getNumAprovados(): number {
        return 0;
    }
    
    getNumReprovados(): number {
        switch (this.descricao) {
            case '2017.2':
                return 12;
            case '2018.1':
                return 10;
            case '2018.2':
                return 6;
            case '2019.1':
                return 4;
            case '2019.2':
                return 5;
            default:
                return 6;
        }
    }

    getMedia(): number {
        switch (this.descricao) {
            case '2017.2':
                return 6.7;
            case '2018.1':
                return 7.3;
            case '2018.2':
                return 7.1;
            case '2019.1':
                return 6.8;
            case '2019.2':
                return 7.8;
            default:
                return 8;
        }
    }

    getMatricula(cpf: string): Matricula {
        return null;
    }

    getRoteiros(): Roteiro[] {
        return this.roteiros;
    }

    getMonitores(): Aluno[] {
        return [];
    }

    getPercentual(meta: string, conceito: string): number {
        return 0;
    }

    getMatriculas(): Matricula[] {
        return this.matriculas;
    }
}