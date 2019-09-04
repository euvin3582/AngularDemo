import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
//import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})

export class AppComponent  { 
  // appTitle: string = 'Welcome'; 
  // appStatus: boolean = true;
  // appList: any[] = [{
  //   "ID":"1",
  //   "url":"app/Images/One.png"
  // },
  // {
  //   "ID":"2",
  //   "url":"app/Images/Two.png"
  // }];

  iproducts: IProduct[];
  constructor(private _product: ProductService){
  }

  ngOnInit(): void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
  }
}
