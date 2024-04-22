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

  constructor(private router: Router, private restaurantesService: RestaurantesService){
  }

  ngOnInit() {
  }

  redirecionaRestaurante(categoria: string){
    this.router.navigate(["restaurantes", categoria]);
  }

}
