import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  inputValue: string ='';
  datos: any[] | undefined;
  state: any;

  user: any;

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.initLocalStorage();

    const recuerdame = localStorage.getItem('recuerdame');
    this.state = recuerdame === 'true';
  }

  async initLocalStorage() {
    await this.storage.create();
  }

  Ingresar() {
    // Aquí puedes realizar la lógica de autenticación si es necesario

    

    // Navega a la página de inicio cuando se hace clic en "Ingresar"
    this.navCtrl.navigateForward('/home', { state: { usuario: this.inputValue } }); // '/home' es la ruta definida para la página de inicio en tu enrutador
    
  }

  Recuperarcontrasena() {
    console.log('llegue');
    this.navCtrl.navigateForward(['/recuperar']);
  }

}
