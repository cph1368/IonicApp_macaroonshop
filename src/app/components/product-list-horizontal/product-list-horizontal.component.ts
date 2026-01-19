import { Component, input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from 'src/app/interfaces/product.interface';
import { IonRow, IonicSlides, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.scss'],
  imports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductListHorizontalComponent  implements OnInit {

   products = input<Product[]>();
  swiperModules = [IonicSlides];
   
  constructor() { }

  ngOnInit() {}

}
