import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  nickUser: string;
  nameUser: string;
  emailUser: string;
  telefoneUser: string;
  temPerfil: boolean = false;
  dadosUser: any;
  listaFavoritos: any;

  editUser: boolean = false;

  ngOnInit() {
    if(localStorage.getItem('dadosUsuario')) {
      
      const dadosUsarioCriptografado: any = localStorage.getItem('dadosUsuario');
      this.dadosUser = JSON.parse(atob(dadosUsarioCriptografado));
      
      const favoritos: any = localStorage.getItem('favoritos');
      this.listaFavoritos = JSON.parse(favoritos);
    
      this.nickUser = this.dadosUser.apelido;
      this.nameUser = this.dadosUser.nome;
      this.emailUser = this.dadosUser.email;
      this.telefoneUser = this.dadosUser.telefone;

      this.temPerfil = true;
    } else {
      this.temPerfil = false;
    }
  }

  salvarNickUsuario() {
    this.dadosUser.apelido = this.nickUser;
    const dadosCriptografados = btoa(JSON.stringify(this.dadosUser));
    localStorage.setItem('dadosUsuario', dadosCriptografados);

    this.editUser = false;
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

}


