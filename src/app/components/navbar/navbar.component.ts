import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router,
    public cartService: CartService,
  ) { }

  ngOnInit(): void { }

  openingShoppingCart(): void {
    this._router.navigate(['/cart']);
  }

}
