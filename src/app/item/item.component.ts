import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ItemChangedEvent } from '../item-notification.event';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  price: number;

  @Input()
  image: string;

  @Input()
  quantity: number;

  @Output()
  notifyParent: EventEmitter<ItemChangedEvent>;

  constructor() {
    this.name = '';
    this.price = 0;
    this.image = '';
    this.quantity = 1;
    this.notifyParent = new EventEmitter();
  }

  ngOnInit(): void {}

  handleClick(action: String) {
    switch (action) {
      case 'ADD_QUANTITY':
        this.addQuantity();
        break;
      case 'REMOVE_QUANTITY':
        this.removeQuantity();
        break;
      case 'PURCHASE':
        this.addToCart();
        this.resetQuantity();
        break;
      default:
        break;
    }
  }

  addQuantity() {
    this.quantity++;
  }

  resetQuantity() {
    this.quantity = 1;
  }

  removeQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart() {
    let item = new Item(this.name, this.quantity, this.price, this.image);
    this.notifyParent.emit({ action: 'PURCHASE', item });
  }
}
