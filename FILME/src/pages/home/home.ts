import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Filme } from '../../model/filme';
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController) {

    var l1 = { nome: 'ToyStory', autor: 'John Lasseter' };
    var l2 = { nome: 'ToyStory 2', autor: 'John Lasseter' };
    var l3 = { nome: 'ToyStory 3', autor: 'John Lasseter' };
    var l4 = { nome: 'ToyStory 4', autor: 'John Lasseter' };
    var l5 = { nome: 'ToyStory 5', autor: 'John Lasseter' };
    this.filmes = [l1, l2, l3, l4, l5];
  }

  irParaDestino(filme: Filme): void {
    this.navCtrl.push(DestinoPage, { filmeSelecionado: filme });
  }

}
