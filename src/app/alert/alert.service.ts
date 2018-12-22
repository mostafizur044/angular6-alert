import { Injectable, EventEmitter } from '@angular/core';

export class Alert {
  classname: string; //success, info, warning, danger
  message: string;
  autoRemove?: boolean; // By default false
  timer?: number; // in ms default 3000ms
  options?: Options;
}

export class Options {
  position?: string; // fixed, absolute, relative
  top?: number
  bottom?: number;
  left?: boolean;
  right?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  trigger: EventEmitter<Alert> = new EventEmitter();

  constructor() { }

  alert(config: Alert) {
    this.trigger.emit(config);
  }

}
