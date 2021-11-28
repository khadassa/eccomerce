import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css'],
})
export class QuantitySelectorComponent implements OnInit {
  @Input()
  quantity: number;

  @Output()
  quantityChange: EventEmitter<number>;

  constructor() {
    this.quantity = 1;
    this.quantityChange = new EventEmitter();
  }

  ngOnInit(): void {}

  onChange(action: string) {
    if (action == 'ADD') {
      this.increment();
    }

    if (action == 'REMOVE') {
      this.decrement();
    }

    this.quantityChanged();
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  quantityChanged() {
    this.quantityChange.emit(this.quantity);
  }
}
