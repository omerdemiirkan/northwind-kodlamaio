import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedCategoryId:number = 1;

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) this.selectedCategoryId =params['id'];
    });
    this.productService.getProducts(this.selectedCategoryId).subscribe(data=>{
      this.products = data;
      console.log(this.selectedCategoryId)
    })
    
  }
}
