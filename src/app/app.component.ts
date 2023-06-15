import { Component, OnInit } from '@angular/core';
import { Product, ProductsResponse } from './product';
import { AppService } from './app.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products:Product[]=[];
  totalRecords:number=0;
  loading:boolean=true;
  constructor(private appService:AppService){}
  ngOnInit(): void {
    
  }

  loadProducts(event:LazyLoadEvent){
    this.loading=true;
    this.appService.getProducts(event.first || 0).subscribe((response:ProductsResponse)=>{
      this.loading=false;
      
      this.products=response.products;
      this.totalRecords=response.total;
    })
  }
}
