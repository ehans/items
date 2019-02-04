import { Injectable } from '@angular/core';
import { Item } from './item';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    public items: Item[];
    constructor(private localStorageService: LocalStorageService) {}

    save(item: Item): void {
        this.localStorageService.store(item);
    }

    getItems(): Item[] {
        console.log(this.localStorageService.getItems());
        return this.localStorageService.getItems();
    }
}
