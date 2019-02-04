import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/*Agora cada rota carrega um módulo específico*/
const routes: Routes = [
  {
    path: 'item',
    loadChildren: './item/item.module#ItemModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/item'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
