import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-verification',
  templateUrl: './order-verification.component.html',
  styleUrls: ['./order-verification.component.css'],
})
export class OrderVerificationComponent implements OnInit {
  hide: boolean;
  constructor() {
    this.hide = true;
  }

  ngOnInit(): void {}
}
