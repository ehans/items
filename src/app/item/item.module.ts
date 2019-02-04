import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item.routing.module';
import { ItemAddComponent } from './add/item-add.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [ItemComponent, ItemAddComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ]
})
export class ItemModule { }
