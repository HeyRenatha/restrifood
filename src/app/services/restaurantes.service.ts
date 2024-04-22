import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(
    private dataBaseStore: AngularFirestore,
    ) { }

  getAllRestaurantes() {
    return this.dataBaseStore.collection('restaurantes', restaurante => restaurante.orderBy('nome')).valueChanges({idField: 'id'})
  }

}
