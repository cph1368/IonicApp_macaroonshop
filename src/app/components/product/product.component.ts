import { Component, input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { Strings } from 'src/enums/strings.enum';
import { IonImg, IonThumbnail, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [IonImg, IonThumbnail, IonCard],
})
export class ProductComponent  implements OnInit {

  item = input<Product>();
  currency = Strings.currency;
  
  constructor() { }

  ngOnInit() {}

}
