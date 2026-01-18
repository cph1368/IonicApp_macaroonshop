import { Component, input, OnInit } from '@angular/core';
import { IonItemDivider, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [IonItemDivider, IonButton],
})
export class ListHeadingComponent  implements OnInit {

      title = input<string>('');  
      heading = input<string>('');
    buttonTitle = input<string>('see All');
  constructor() { }

  ngOnInit() {}

}
