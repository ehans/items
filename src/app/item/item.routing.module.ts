import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemAddComponent } from './add/item-add.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent
  },
  {
    path: 'add',
    component: ItemAddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemRoutingModule { }
