import { Component } from '@angular/core';
import { IonHeader,IonButton, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonButton, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {

  title = 'firsttable';
  constructor() {}

  test() {
    console.log('Test button clicked!');
  } 
}
