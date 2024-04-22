import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { ComecarIntroComponent } from './pages/comecar-intro/comecar-intro.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { TermosComponent } from './pages/termos/termos.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { HttpClientModule } from '@angular/common/http';
import { SairComponent } from './pages/sair/sair.component';
import { CadastrarRestauranteComponent } from './pages/cadastrar-restaurante/cadastrar-restaurante.component';
import { DescobrirComponent } from './pages/descobrir/descobrir.component';
import { LoginMobileComponent } from './pages/login-mobile/login-mobile.component';
import { RestrichefComponent } from './pages/restrichef/restrichef.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    ComecarIntroComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    TermosComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PerfilComponent,
    FavoritosComponent,
    RestaurantesComponent,
    SairComponent,
    CadastrarRestauranteComponent,
    DescobrirComponent,
    LoginMobileComponent,
    RestrichefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
