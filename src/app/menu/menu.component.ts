import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Itens',
        icon: 'pi pi-fw pi-list',
        routerLink: 'item',
        items: [{
          label: 'Novo',
          icon: 'pi pi-fw pi-plus',
          routerLink: 'item/add'
        }
        ]
      }
    ];
  }

}
