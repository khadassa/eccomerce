import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemChangedEvent } from '../item-notification.event';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
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

  onRemoval() {
    this.sendNotification('DELETE');
  }

  onChange(newQuantity: number) {
    this.quantity = newQuantity;
    this.sendNotification('UPDATE');
  }

  sendNotification(action: string) {
    let item = new Item(this.name, this.quantity, this.price, this.image);
    this.notifyParent.emit({ action, item });
  }
}
