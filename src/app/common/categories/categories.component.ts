import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService:CategoryService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(data=>{
     this.categories=data    
    })
  }
  changeCategory():void{
    window.location.href= '/product/'+this.selectedCategory.id;
  }
}
