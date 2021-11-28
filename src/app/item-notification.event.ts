import { Item } from './item/item.model';

export class ItemChangedEvent {
  action: string;
  item: Item;

  constructor(action: string, item: Item) {
    this.action = action;
    this.item = item;
  }
}
