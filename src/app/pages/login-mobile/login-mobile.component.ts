import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrl: './login-mobile.component.scss'
})
export class LoginMobileComponent {

  formLogin: FormGroup;
  dadosUsuario: any;
  showErroUsuarioSenha: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if(localStorage.getItem('dadosUsuario')) {

      const dadosUsarioCriptografado: any = localStorage.getItem('dadosUsuario');
      this.dadosUsuario = JSON.parse(atob(dadosUsarioCriptografado));
      const dadosFormLogin = this.formLogin.getRawValue();

      if((dadosFormLogin.email === this.dadosUsuario.email) && (dadosFormLogin.senha === this.dadosUsuario.senha)) {
        this.router.navigate(["home"]);
      } else {
        this.showErroUsuarioSenha = true;
      }

      } else {
        this.showErroUsuarioSenha = true;
      }
  }

}
