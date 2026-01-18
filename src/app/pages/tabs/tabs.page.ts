import { Component, ViewChild } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { home,location,chatbox,person } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [  IonIcon, IonTabBar, IonTabButton, IonTabs],
})

  export class TabsPage {
    @ViewChild('tabs') tabs!: IonTabs;
  
    constructor() {
   
      addIcons({ home,location,chatbox,person });
    }
  
    selectRadio() {
      this.tabs.select('radio');
    }
  }