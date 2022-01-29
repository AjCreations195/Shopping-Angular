import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ProductService} from './product.service'
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private products:ProductResponseModel[]=[]
  private SERVER_URL = "http://localhost:3000"

  constructor(
    private http:HttpClient,

  ) { }
  getSingleOrder(orderId:number){
    return this.http.get<ProductResponseModel[]>(this.SERVER_URL + '/orders' +orderId).toPromise()
  }
}
interface ProductResponseModel{
  id:number;
  name:string;
  description:string;
  price:number;
  quantityOrdered:number;
  image:string
}
