import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //Vetor
  vetor!: Curso[];

  //Objeto da Classe Curso
  curso = new Curso()

  //Construtor
  constructor(private curso_service:CursoService) { 

  }

  //Inicializador
  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  //Cadastro
  cadastro(){
    this.curso_service.cadastrarCurso(this.curso).subscribe(
      (res:Curso[]) => {

        //Adicionando dados ao vetor
        this.vetor = res;


        //Limpar os atributos
        this.curso.nomeCurso = undefined
        this.curso.valorCurso = undefined

        //Atualizar a listagem
        this.selecao();
      }
    )
  }

  //Seleção
  selecao(){
    this.curso_service.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //Alterar
  alterar() {
      this.curso_service.atualizarCurso(this.curso).subscribe(
        (res) => {

          //Atualizar vetor
          this.vetor = res;

          //Limpar os valores do objeto
          this.curso.nomeCurso = undefined;
          this.curso.valorCurso = undefined;

          //Atualizar a listagem
          this.selecao();

        }
      )
  }

  //Remover
  remover() {
      this.curso_service.removerCurso(this.curso).subscribe(
        (res : Curso[]) => {
          this.vetor = res;

          this.curso.nomeCurso = undefined;
          this.curso.valorCurso = undefined;
        }
      )
  }


  //Selecionar curso especifico
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }
}
