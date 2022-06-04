import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';

import { NaviComponent } from './common/navi/navi.component';
import { CategoriesComponent } from './common/categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component'
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ListboxModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
