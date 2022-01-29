import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products:any=[];
  allProducts: any = 0
  isDisplay:boolean=true;
  totalItemNumber:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
    this.cartService.getProductData().subscribe(res=>{
      this.totalItemNumber =res.length;
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

}
