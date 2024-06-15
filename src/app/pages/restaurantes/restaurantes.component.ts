import { Component } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss'
})
export class RestaurantesComponent {

  listRestaurantes: any;
  listRestaurantesBackup: any;
  categoria: string | null;
  estadoSelecionado: string = '';
  filtrouRestaurante: boolean = false;

  listaFavoritos: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantesService: RestaurantesService
    ){}

  ngOnInit (){
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.getListRestaurantes();
    this.listaFavoritos = localStorage.getItem('favoritos');
    this.listaFavoritos = JSON.parse(this.listaFavoritos);
  }

  getListRestaurantes (){
    this.restaurantesService.getAllRestaurantes().subscribe({
      next:(response: any) => {

        // Filtrar categorias dos restaurantes
        this.listRestaurantes = response.filter((restaurante: any) => {
          if(restaurante.categoria.includes(this.categoria)) {
            return restaurante;
          }
        });

        this.listRestaurantesBackup = this.listRestaurantes;
        
        setTimeout(() => {
          this.verificaFavoritoLista();
        }, 1000);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  abreFechaCard(index: any) {
    const row = document.getElementById(index);
    const setinha = document.getElementById('setinha'+index);

    if(row?.classList.contains('d-none')){
      row?.classList.remove('d-none');
      setinha?.classList.add('gira180');
    } else {
      row?.classList.add('d-none');
      setinha?.classList.remove('gira180');
    }


  }

  salvarFavoritos(restaurante: any, idRestaurante: any){
    
    const coracaoRestaurante: any = document.getElementById(restaurante.instagram);

    if(!coracaoRestaurante.classList.contains('bi-heart-fill')) {
      //  AQUI VOU FAVORITO UM RESTAURANTE
      if(localStorage.hasOwnProperty('favoritos')) {
  
        let favoritos: any = localStorage.getItem("favoritos");
        favoritos = JSON.parse(favoritos);
  
        favoritos.push(restaurante);
        
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        
        coracaoRestaurante.classList.remove('bi-heart');
        coracaoRestaurante.classList.add('bi-heart-fill');

        
        this.listaFavoritos = localStorage.getItem('favoritos');
        this.listaFavoritos = JSON.parse(this.listaFavoritos);
        
      } else {
        const favoritos = [restaurante];
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        
        coracaoRestaurante.classList.remove('bi-heart');
        coracaoRestaurante.classList.add('bi-heart-fill');

        
        this.listaFavoritos = localStorage.getItem('favoritos');
        this.listaFavoritos = JSON.parse(this.listaFavoritos);
      }
    } else {
      // AQUI DESFAVORITA O RESTAURANTE

      this.listaFavoritos.forEach((favorito: any) => {
        if(favorito.nome === restaurante.nome) {
          this.listaFavoritos = this.listaFavoritos.filter((restauranteFavorito: any) => {
            return restauranteFavorito.nome !== restaurante.nome;
          });
          
          localStorage.setItem('favoritos', JSON.stringify(this.listaFavoritos));
        }
      });

      coracaoRestaurante.classList.remove('bi-heart-fill');
      coracaoRestaurante.classList.add('bi-heart');
    }

  }

  verificaFavoritoLista() {
    this.listRestaurantes.forEach((restaurante: any) => {
      
      this.listaFavoritos.forEach((favorito: any) => {
        if(restaurante.nome === favorito.nome) {
          const coracaoRestaurante: any = document.getElementById(restaurante.instagram);
          coracaoRestaurante.classList.remove('bi-heart');
          coracaoRestaurante.classList.add('bi-heart-fill');
        }
      });
    });
  }

  filtrarEstado() {
    this.filtrouRestaurante = true;
    this.listRestaurantes = this.listRestaurantesBackup.filter((restaurante: any) => restaurante.endereco.slice(-2) === this.estadoSelecionado);
  }
  
  limparFiltro() {
    this.estadoSelecionado = '';
    this.filtrouRestaurante = false;
    this.listRestaurantes = this.listRestaurantesBackup;
  }

}
