import { Component, input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { Strings } from 'src/enums/strings.enum';
import { IonImg, IonThumbnail, IonCard, IonItem, IonLabel, IonText } from "@ionic/angular/standalone";
import { VegNonvegIndicatorComponent } from "src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [IonImg, IonThumbnail, IonCard, IonItem, IonLabel, IonText, VegNonvegIndicatorComponent],
})
export class ProductComponent  implements OnInit {

  item = input<Product>();
  currency = Strings.currency;
  
  constructor() { }

  ngOnInit() {}

}
