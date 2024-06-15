import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantesService } from '../../services/restaurantes.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  intervaloSlideIa: any;
  slideHeaderIA: boolean = true;

  constructor(private router: Router, private restaurantesService: RestaurantesService){
  }

  ngOnInit() {
    this.defineSlideHeaderIntervalo();
  }

  defineSlideHeaderIntervalo() {
    this.intervaloSlideIa = setInterval(() => { this.slideHeaderIA = !this.slideHeaderIA }, 10000);
  }

  trocaSlideHeader() {
    clearInterval(this.intervaloSlideIa);
    this.slideHeaderIA = !this.slideHeaderIA;
    this.defineSlideHeaderIntervalo();
  }

  redirecionaRestaurante(categoria: string){
    this.router.navigate(["restaurantes", categoria]);
  }

}
