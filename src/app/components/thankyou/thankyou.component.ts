import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  products:any=[];
  allProducts: any = 0
  totalItemNumber:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res=>{
      this.totalItemNumber =res.length;
      this.products = res;
      this.allProducts = this.cartService.getTotalAmount();
    })
  }

}
