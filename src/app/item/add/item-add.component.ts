import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-add.component.html',
  styleUrls: ['../item.component.css']
})
export class ItemAddComponent implements OnInit {

  public item: Item = new Item;
  value: boolean;
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  public save() {
    this.itemService.save(this.item);
  }
}
