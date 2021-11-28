import { Component, OnInit } from '@angular/core';
import { ItemChangedEvent } from '../item-notification.event';
import { Item } from '../item/item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cart: Item[];

  constructor(private service: ShoppingCartService) {
    this.cart = [];
  }

  ngOnInit(): void {
    this.cart = this.service.getCart();
  }

  sumAllItems() {
    return this.cart.reduce((total, item) => {
      let price = item.price * item.quantity;
      return total + price;
    }, 0);
  }

  onChange(event: boolean) {
    this.ngOnInit();
  }
}
