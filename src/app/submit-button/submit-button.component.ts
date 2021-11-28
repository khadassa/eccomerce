import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent implements OnInit {
  @Input()
  link: string;

  @Input()
  icon: string;

  @Input()
  name: string;

  constructor() {
    this.link = '/checkout';
    this.icon = 'shopping_cart';
    this.name = 'Checkout';
  }

  ngOnInit(): void {}
}
