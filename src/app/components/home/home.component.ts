import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Observable } from 'rxjs'
import {ProductService} from '../../service/product.service'
import {NotifierService} from '../../service/notifier.service'
import {Router} from "@angular/router";
import {ProductModelServer,ServerResponse} from '../../Models/product.model'
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products:ProductModelServer[]=[]
  constructor(
        private breakpointObserver: BreakpointObserver,
        public ProductService:ProductService,
        public notifier:NotifierService,
        private router:Router,
        private cartService:CartService,
        ) {}
        ngOnInit(){
          this.ProductService.getAllProducts()
          .subscribe(res=>{
            console.log(res);
            this.products = res
            this.products.forEach((a:any) => {
              Object.assign(a,{quantity:1,total:a.price})
            });
          })
        }
        
          // .subscribe((res:any) =>{
          //    this.products = res.Products
          //    console.log(this.products);
          // (error:any)=>{
          //   alert('There was an error in recieving data fromserver. Please try again later...')
          // })
        // }
        selectProduct(id:number){
           this.router.navigate(['/product',id]).then()
             this.ProductService.getSingleProduct(id).subscribe(response=>{
               console.log(response);
               
             })
        }
        getImage(imageName:string):string{
              return ( 'http://localhost:3000/images/' + imageName + '.png'  )
            }
            AddToCart(item:any) {
              this.cartService.addToCart(item)
            }
       
}

//   /** Based on the screen size, switch from standard to one column per row */
//   isHandsetObserver:Observable<boolean>= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//     map(({ matches }) => {
//       if (matches) {
//         return true;
//       }

//       return false;
//     })
//   );

//   ngOnInit(){
//     this.isHandsetObserver.subscribe(currentObserverValue =>{
//       this.isHandSet =currentObserverValue;
//       this.loadCards()
//     })
//     this.CommonService.getDeals().subscribe(response =>{
      
//         this.cardsForHandset =response.handsetCards;
//         this.cardsForWeb =response.webCards;
//         this.loadCards()
//         this.notifier.showNotification('Todays deals loaded successfully...Click it to grab offers!','Ok','success')

//     },
//     error =>{
//       this.notifier.showNotification('There was an error in recieving data from server. Please come again later!','Ok','error')
// // alert('There was an error in recieving data from server. Please come again later')
//     })
//   }
//   loadCards(){
//     this.cards = this.isHandSet? this.cardsForHandset:this.cardsForWeb
//   }
// 
