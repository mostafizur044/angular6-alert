import { Directive, Renderer2, OnInit, ElementRef, Input } from '@angular/core';
import { Options } from './alert.service';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {

  @Input() options: Options;

  constructor(
    private render: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.options = this.options ? this.options : new Options();
    this.render.setStyle(
      this.el.nativeElement, 
      'position', 
      this.options.position ? this.options.position : 'fixed'
    );
    if(this.options.top) {
      this.render.setStyle(
        this.el.nativeElement, 
        'top', 
        this.options.top + 'px'
      );
    } else {
      this.render.setStyle(
        this.el.nativeElement, 
        'bottom', 
        this.options.bottom + 'px'
      );
    }

    this.render.setStyle(
      this.el.nativeElement.children[0], 
      'margin-left', 
      this.options.left ? '' : 'auto'
    );

    this.render.setStyle(
      this.el.nativeElement.children[0],
      'margin-right', 
      this.options.right ? '' : 'auto'
    );

  }

}
