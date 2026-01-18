import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart,chevronDownOutline, notificationsOutline, optionsOutline } from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ ListHeadingComponent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar]
})
export class HomePage implements OnInit {

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
