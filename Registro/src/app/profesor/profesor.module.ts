import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfesorPage } from './profesor.page';

import { ProfesorPageRoutingModule } from './profesor-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorPageRoutingModule
  ],
  declarations: [ProfesorPage]
})
export class ProfesorPageModule {}
