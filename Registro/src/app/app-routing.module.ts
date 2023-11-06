import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then((m) => m.ProfesorPageModule)
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then((m) => m.CodigoqrPageModule)
  },
  {
    path: 'codiguito',
    loadChildren: () => import('./codiguito/codiguito.module').then((m) => m.CodiguitoPageModule)
  },
  {
    path: 'e404', // Agrega la ruta para la página de error 404 si no la has definido
  
    loadChildren: () => import('./e404/e404.module').then((m) => m.E404PageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./e404/e404.module').then((m) => m.E404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
