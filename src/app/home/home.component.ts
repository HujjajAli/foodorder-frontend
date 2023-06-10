import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { StarRatingComponent } from 'ng-starrating/public-api';
import { ProductModel } from '../models/Product-Model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:undefined | ProductModel[];
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    
    this.route.params.subscribe(params =>{
      if(params['searchItems']){
        console.log('calling get search products');
        this.productService.getProductsBySearch(params['searchItems']).subscribe((response)=>{
          console.log(response);
         this.products = response;
        });
      }else{
        console.log('calling get all products');
        this.productService.getAllProducts().subscribe((response)=>{
          console.log(response);
         this.products = response;
        });

      }
    });
  }

}
