import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertDirective } from './alert.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, AlertDirective],
  exports: [AlertComponent]
})
export class AlertModule { }
