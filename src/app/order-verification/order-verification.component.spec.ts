import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVerificationComponent } from './order-verification.component';

describe('OrderVerificationComponent', () => {
  let component: OrderVerificationComponent;
  let fixture: ComponentFixture<OrderVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
