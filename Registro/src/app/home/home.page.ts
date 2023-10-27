import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Obtener el nombre de usuario del estado
    const state = history.state;
    if (state && state.usuario) {
      this.usuario = state.usuario;
    }
  }

}
