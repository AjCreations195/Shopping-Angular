import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component'
import { ProductService } from './service/product.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotifierComponent } from './components/notifier/notifier.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {InterceptorService} from './service/loader/interceptor.service';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {DropdownModule} from 'ngx-dropdown';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { NgxSpinnerModule } from "ngx-spinner";
import { ThankyouComponent } from './components/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotifierComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    LayoutModule,
    DropdownModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
   ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
