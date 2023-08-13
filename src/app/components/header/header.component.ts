import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  private _cart: Cart = { items: [] }; //items array
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart) {
    this._cart = cart

    // cart changes, upcate itemQuantity
    this.itemsQuantity = cart.items // array of items object, transform into array of quantity
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  //private keyword here, means only used in ts, html cannot 
  constructor(private cartService: CartService) {
  }

  getTotal(items: Array<CartItem>) {
    return this.cartService.getTotal(items)
  }

  onClearCart() {
    this.cartService.clearCart()
  }

}
