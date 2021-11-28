import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemChangedEvent } from '../item-notification.event';
import { Item } from '../item/item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  @Input()
  buttonLink: string;

  @Input()
  buttonIcon: string;

  @Input()
  buttonName: string;

  @Output()
  notifyParent: EventEmitter<boolean>;

  cart: Item[];

  constructor(private sevice: ShoppingCartService) {
    this.buttonLink = '/checkout';
    this.buttonIcon = 'shopping_cart';
    this.buttonName = 'Checkout';
    this.notifyParent = new EventEmitter();
    this.cart = [];
  }

  ngOnInit(): void {
    this.syncWithService();
  }

  receiveNotification({ action, item: { name, quantity } }: ItemChangedEvent) {
    switch (action) {
      case 'DELETE':
        this.sevice.deleteItem(name);
        break;
      case 'UPDATE':
      default:
        this.sevice.updateItem(name, quantity);
        break;
    }
    this.syncWithService();
    this.notifyParent.emit(true);
  }

  syncWithService() {
    this.cart = this.sevice.getCart();
  }
}
