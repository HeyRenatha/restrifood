import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent {

  formRecuperarSenha: FormGroup;
  showCardSenhaAlterada: boolean = false;
  showCardErro: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formRecuperarSenha = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      senhaNovamente: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  cadastrarUsuario() {
    
    if(localStorage.getItem('dadosUsuario')) {
      
      let dadosUsuario: any = localStorage.getItem('dadosUsuario');
      dadosUsuario = JSON.parse(atob(dadosUsuario));
      let dadosFormRecuperarSenha = this.formRecuperarSenha.getRawValue();
      dadosUsuario.senha = dadosFormRecuperarSenha.senha;
      
      
      const dadosCriptografados = btoa(JSON.stringify(dadosUsuario));
      localStorage.setItem('dadosUsuario', dadosCriptografados);

      this.showCardSenhaAlterada = true;

      setTimeout(() => {
        this.router.navigate(["login"]);
      }, 5000);
    } else {
      this.showCardErro = true;
    }
    
  }

}
