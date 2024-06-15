import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  formCadastro: FormGroup;
  showUsuarioSalvo: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formCadastro = this.formBuilder.group({
      nome: [null, [Validators.required]],
      apelido: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  cadastrarUsuario() {
    const dadosFormularioUsuario = this.formCadastro.getRawValue();
    
    const dadosCriptografados = btoa(JSON.stringify(dadosFormularioUsuario));
    localStorage.setItem('dadosUsuario', dadosCriptografados);

    this.showUsuarioSalvo = true;

    setTimeout(() => {
      this.router.navigate(["termos"]);
    }, 5000);
    
  }

}
