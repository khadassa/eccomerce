import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ItemsComponent } from './items/items.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { OrderVerificationComponent } from './order-verification/order-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ShoppingCartComponent,
    ItemsComponent,
    CartItemComponent,
    QuantitySelectorComponent,
    NavBarComponent,
    CheckoutComponent,
    SubmitButtonComponent,
    OrderVerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
