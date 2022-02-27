import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

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
  categories:any=[];

  constructor(private cartService:CartService,
               private productService:ProductService) { }

  ngOnInit(): void {
    
    this.cartService.getProductData().subscribe(res=>{
      this.totalItemNumber =res.length;
      this.products = res;
      this.allProducts = this.cartService.getTotalAmount();
    })
    this.getAllCategiesList()
    this.getProductsfromCategory('electronics')
  }

  getAllCategiesList(){
    this.productService.getAllCategiesList().subscribe(res=>{
      console.log(res);
      this.categories= res;
     
    })
  }
  getProductsfromCategory(catName:string){
    this.productService.getProductsfromCategory(catName).subscribe(res=>{
      console.log(res);
     
      
    })
  }

  removeProduct(item:any){
    this.cartService.removeCartData(item);
  }
  removeAllProduct(){
    this.cartService.removeAllCart();
  }

}
