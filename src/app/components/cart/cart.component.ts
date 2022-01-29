import { Component, OnInit } from '@angular/core';
import { CartService } from "../../service/cart.service";
import { Observable } from "rxjs";
import { CartModelServer } from '../../Models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 
   products: any = [];
  allProducts: any = 0
  constructor(private cartService: CartService) {
  }

  ngOnInit():void {
    this.cartService.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = this.cartService.getTotalAmount();
    })  
  }
  removeProduct(item:any){
    
    this.cartService.removeCartData(item);
    
  }
  removeAllProduct(){
    this.cartService.removeAllCart();
  }

  //   ChangeQuantity(id: Number, increaseQuantity: Boolean) {
  //     this.cartService.UpdateCartData(id, increaseQuantity);
  //   }

}
