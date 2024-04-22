import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ComecarIntroComponent } from './pages/comecar-intro/comecar-intro.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { TermosComponent } from './pages/termos/termos.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { SairComponent } from './pages/sair/sair.component';
import { CadastrarRestauranteComponent } from './pages/cadastrar-restaurante/cadastrar-restaurante.component';
import { DescobrirComponent } from './pages/descobrir/descobrir.component';
import { LoginMobileComponent } from './pages/login-mobile/login-mobile.component';
import { RestrichefComponent } from './pages/restrichef/restrichef.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'login-mobile', component: LoginMobileComponent},
  { path: '', component: LoginComponent},
  { path: 'comecar', component: ComecarIntroComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'recuperar', component: RecuperarSenhaComponent},
  { path: 'termos', component: TermosComponent},
  { path: 'home', component: HomeComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'restaurantes/:categoria', component: RestaurantesComponent},
  { path: 'sair', component: SairComponent},
  { path: 'cadastrar-restaurante', component: CadastrarRestauranteComponent},
  { path: 'descobrir', component: DescobrirComponent},
  { path: 'restrichef', component: RestrichefComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
