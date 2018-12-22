import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { AlertService, Alert } from './alert.service';


@Component({
  selector: 'alert-popup',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, AfterViewInit {

  @ViewChild(TemplateRef) tmpRef: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc:  ViewContainerRef;

  config: Alert = new Alert

  constructor(
    private service: AlertService
  ) { }

  ngOnInit() {
    this.config = new Alert();
  }

  ngAfterViewInit() {
    this.service.trigger.subscribe(
      val => {
        this.config = val;
        if(val.message) {
          this.vc.createEmbeddedView(this.tmpRef);
          
          if(val.autoRemove) {
            const time = val.timer ? val.timer : 3000;
            setTimeout(() => {
              this.vc.remove();
            }, time);
          }
        }
      }
    );
  }

  remove() {
    this.vc.remove();
  }

}
