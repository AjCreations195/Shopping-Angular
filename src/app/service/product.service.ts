import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {environment} from '../../environments/environment'
import { ProductModelServer,ServerResponse } from "../Models/product.model";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private SERVER_URL = environment.SERVER_URL;
  private SERVER_URL = "http://localhost:3000"

  constructor(
    public http:HttpClient
  ) { }
  // getDeals():Observable<any>{
  //  return this.http.get('http://localhost:3000/deals')
  // }
  // getAllProducts(numberOfResults:number=10):Observable<ServerResponse>{
  //   return this.http.get<ServerResponse>('http://localhost:3000/products',{
  //     params:{
  //       limit:numberOfResults.toString()
  //     }
  //   })
  // }
   getAllProducts(numberOfResults:number=9){
    return this.http.get('https://fakestoreapi.com/products',{
          params:{
            limit:numberOfResults.toString()
          } }).pipe(map((res:any)=>{
      return res
    }))
    }
  

  // get single product
  getSingleProduct(id:number):Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>('https://fakestoreapi.com/products/' + id)
  } 

  getAllCategiesList(){
     return this.http.get('https://fakestoreapi.com/products/categories')
  }

  // // get product from one category
  // getProductsFromCategory(catName:string):Observable<ProductModelServer[]>{
  //   return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName)
  // }

  getProductsfromCategory(catName:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+catName)
  }
}
