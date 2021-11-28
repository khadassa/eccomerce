import { Component, OnInit } from '@angular/core';
import { ItemChangedEvent } from '../item-notification.event';
import { Item } from '../item/item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private service: ShoppingCartService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      new Item('Painel de Folhas', 1, 190, '../assets/painel_folhas.jpg'),
      new Item('Painel de Lua', 1, 220, '../assets/painel_lua.jpeg'),
    ];
  }

  receiveNotification({ action, item }: ItemChangedEvent) {
    if (action == 'PURCHASE') {
      this.service.addItem(item);
    }
  }
}
