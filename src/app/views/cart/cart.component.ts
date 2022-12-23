import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
  ) { }

  total: number = 0;

  ngOnInit(): void { 
    this.calTotalPrice();
  }

  addItems(i: number) {
    this.cartService.itemQuantities[i] = this.cartService.itemQuantities[i]+1;
    this.calTotalPrice()
  }
  
  removeItems(i: number) {
    this.cartService.itemQuantities[i] = this.cartService.itemQuantities[i]-1;

    if (this.cartService.itemQuantities[i] == 0) {
      this.cartService.itemsInCart.splice(i, 1);
    }

    this.calTotalPrice()
  }

  removeItem(i: number) {
    this.cartService.itemsInCart.splice(i, 1);
    this.cartService.itemQuantities.splice(i, 1);

    this.calTotalPrice()
  }

  removeAllItems() {
    this.cartService.itemQuantities = [];
    this.cartService.itemsInCart = [];
    this.calTotalPrice()
  }

  calTotalPrice() {
    this.cartService.calNumberOfItems();

    let cost = 0;
    for(let i = 0; i < this.cartService.itemsInCart.length; i++) {
      cost = cost+(parseFloat([...this.cartService.itemsInCart[i].price.slice(0, this.cartService.itemsInCart[i].price.length-2), '.', ...this.cartService.itemsInCart[i].price.slice(this.cartService.itemsInCart[i].price.length-2, this.cartService.itemsInCart[i].price.length)].join(""))*this.cartService.itemQuantities[i]);
    }

    this.total = cost;
  }

}
