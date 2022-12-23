import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  @Input() item: any;


  async addItemToCart(product: any) {
    let newProduct = {
      quantity: 1,
      item: product
    }
    if (this.cartService.itemsInCart.includes(product)) {
      alert("Item already added to cart!")
    } else {
      this.cartService.itemsInCart.push(product);
      this.cartService.itemQuantities.push(1);
      this.cartService.calNumberOfItems();
    }
  }
}
