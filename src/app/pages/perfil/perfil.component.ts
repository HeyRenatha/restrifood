import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  nickUser: string = 'Renatinha';
  nameUser: string = 'Renatha Oliveira';
  emailUser: string = 'renatha@gmail.com';
  telefoneUser: string = '(15)99999-9999';
  temPerfil: boolean = false;

  ngOnInit() {
    if(localStorage.getItem('perfil')) {
      this.temPerfil = true;
    } else {
      this.temPerfil = false;
    }
  }

}
