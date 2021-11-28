import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cart: Item[];

  constructor() {
    this.cart = [];
    this.syncWithStorage();
  }

  syncWithStorage() {
    if (this.cart.length == 0) {
      this.fetch();
    } else {
      this.push();
    }
  }

  fetch() {
    let item = localStorage.getItem('SHOPPING_CART');
    if (item != null) {
      this.cart = JSON.parse(item);
    }
  }

  push() {
    let items = JSON.stringify(this.cart);
    localStorage.setItem('SHOPPING_CART', items);
  }

  addItem(item: Item) {
    this.upsert(item);
    this.push();
  }

  deleteItem(name: string) {
    this.cart = this.cart.filter((item) => item.name != name);
    this.push();
  }

  updateItem(name: string, quantity: number) {
    this.cart = this.cart.map((item) => {
      if (item.name != name) {
        return item;
      } else {
        return new Item(item.name, quantity, item.price, item.image);
      }
    });
    this.push();
  }

  upsert(newItem: Item) {
    if (this.isItemOnCart(newItem.name)) {
      this.updateCart(newItem.name, newItem.quantity);
    } else {
      this.appendToCart(newItem);
    }
  }

  isItemOnCart(name: string): boolean {
    let item = this.cart.find((item) => item.name == name);
    return item != undefined;
  }

  updateCart(name: string, quantity: number) {
    this.cart = this.cart.map((item) => {
      if (item.name != name) {
        return item;
      } else {
        return new Item(
          item.name,
          item.quantity + quantity,
          item.price,
          item.image
        );
      }
    });
  }

  appendToCart(newItem: Item) {
    this.cart = [...this.cart, newItem];
  }

  getCart(): Item[] {
    return [...this.cart];
  }
}
