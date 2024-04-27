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

  // Envio do restaurante para a tabela de Aprovações (aqui não será adicionado de cara na tabela oficial de restaurantes)
  cadastrarRestaurante(restaurante: any) {
    return this.dataBaseStore.collection('aprovacoes').add(restaurante);
  }

}
