import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrl: './cadastrar-restaurante.component.scss'
})
export class CadastrarRestauranteComponent {

  nome: string = '';
  descricao: string = '';
  endereco: string = '';
  telefone: string = '';
  instagram: string = '';
  categoria: string = '';

}
