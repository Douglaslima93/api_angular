import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor: Curso[] | undefined;

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
  }

  //Cadastro
  cadastro(): void {
    alert("cadastro")
  }

  //Seleção
  selecao(): void {
      alert("Seleção")
  }

  //Alterar
  alterar(): void {
      alert("Alterar")
  }

  //Remover
  remover(): void {
      alert("Remover")
  }


}
