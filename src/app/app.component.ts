import { Component } from '@angular/core';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private alert: AlertService) {}

  create() {
    this.alert.alert({
      classname: '',
      message: 'Custom Toster',
      autoRemove: true,
      timer: 2000,
      options: {
        right: true
      }
    })
  }
}
