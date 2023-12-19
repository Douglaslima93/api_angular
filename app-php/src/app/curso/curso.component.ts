import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  nome: String = "Douglas";

  constructor() { }

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
