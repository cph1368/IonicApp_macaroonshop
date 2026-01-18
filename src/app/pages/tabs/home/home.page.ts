import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart,chevronDownOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol, IonSearchbar]
})
export class HomePage implements OnInit {

  constructor() { 
    addIcons({ chevronDownOutline,cart,notificationsOutline });
  }
  gotoButton() {
    console.log('Button was clicked!');
    alert('Button is clicked!');
  }
  ngOnInit() {

  }

  

}
