import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OrderService } from './order.service'
import { ProductModelServer } from '../Models/product.model'
import { CartModelPublic, CartModelServer } from '../Models/cart.model'
import { NavigationExtras, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})


export class CartService {

  ServerURL = "http://localhost:3000"

  cartDataList:any[]=[];
  productList= new BehaviorSubject<any>([]);
  constructor(private productService: ProductService,
    private orderService: OrderService,
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toast: ToastrService) { }

    // get product data
    getProductData(){
     return this.productList.asObservable()
    }
    // set product data
    setProduct(product:any){
      this.cartDataList.push(...product);
      this.productList.next(product)
    }
// add to cart details
    addToCart(product:any){
      
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList)
      this.getTotalAmount();
      console.log(this.cartDataList);
    }
    // get total amount
    getTotalAmount(){
      let grandTotal =0 ;
      this.cartDataList.map((a:any)=>{
        grandTotal+= a.total;
      })
      return grandTotal
    }
    // remove cart data one by one
    removeCartData(product:any){
      this.cartDataList.map((a:any, index:any)=>{
        if(product.id === a.id){
          this.cartDataList.splice(index,1)
        }
      })
      alert("Deleting a product from cart...Are you sure ?")
      this.productList.next(this.cartDataList)
    }
    // remove all cart data
    removeAllCart(){
      this.cartDataList=[]
      this.productList.next(this.cartDataList)
      alert("Are you sure to delete ?")
    }
  }
  