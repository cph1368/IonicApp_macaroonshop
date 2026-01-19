import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart,chevronDownOutline, notificationsOutline, optionsOutline } from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from "src/app/components/banner/banner.component";
import { CategoryService } from 'src/services/category/category.service';
import { Category } from 'src/app/interfaces/category.interface';
import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { BannerService } from 'src/services/banner/banner.service';
import { Banner } from 'src/app/interfaces/banner.interface';
import { CategoriesComponent } from "src/app/components/categories/categories.component";
import { ProductListHorizontalComponent } from "src/app/components/product-list-horizontal/product-list-horizontal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ListHeadingComponent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar, BannerComponent, IonContent, CategoriesComponent, ProductListHorizontalComponent]
})
export class HomePage implements OnInit {
  
  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  constructor() { 
    addIcons({ chevronDownOutline,cart,notificationsOutline,optionsOutline });
  }
  gotoButton() {
    console.log('Button was clicked!');
    alert('Button is clicked!');
  }
  ngOnInit() {

  }

  

}
