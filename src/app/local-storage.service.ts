import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Item } from './item/item';

const STORAGE_KEY = 'local_items';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public store(item: Item): void {
    const items = this.storage.get(STORAGE_KEY) || [];
    items.push({
      item: item,
      isChecked: false
    });
    this.storage.set(STORAGE_KEY, items);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }

  public getItems(): Item[] {
    return this.storage.get(STORAGE_KEY);
  }
}
