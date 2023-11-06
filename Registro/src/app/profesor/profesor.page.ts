import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profesor',
  templateUrl: 'profesor.page.html',
  styleUrls: ['profesor.page.scss'],
})
export class ProfesorPage {

  usuario: string = '';

  constructor(private navCtrl: NavController) {}

  

}
