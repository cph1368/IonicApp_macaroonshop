import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { IonRow, IonicSlides } from '@ionic/angular/standalone';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent  implements OnInit {
  
  swiperModules = [IonicSlides];
   categories = input<Category[]>([]);



  constructor() { }

  ngOnInit() {}

}
