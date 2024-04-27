import { Component } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrl: './cadastrar-restaurante.component.scss'
})
export class CadastrarRestauranteComponent {

  srcRestaurante: string = '';
  nome: string = '';
  cnpj: string = '';
  descricao: string = '';
  endereco: string = '';
  telefone: string = '';
  instagram: string = '';
  categorias: any;
  restauranteEnviado: boolean = false;
  erroRestauranteEnviado: boolean = false;

  constructor(private restaurantesService: RestaurantesService){}

  enviarRestauranteParaAprovacao() {
    this.erroRestauranteEnviado = false;
    this.restauranteEnviado = false;

    const objRestaurante = {
      imagem: this.srcRestaurante,
      nome: this.nome,
      descricao: this.descricao,
      endereco: this.endereco,
      telefone: this.telefone,
      instagram: this.instagram,
      categorias: this.categorias,
      cnpj: this.cnpj
    };

    this.restaurantesService.cadastrarRestaurante(objRestaurante).then(
      (response: any) => {
        this.restauranteEnviado = true;
      })
      .catch(
        err => {
          this.erroRestauranteEnviado = true;
          console.error(err);
    });
  }

}
