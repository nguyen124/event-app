import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../shared/jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class TriggerModalDirective implements OnInit {
  private el: HTMLHtmlElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    })

  }
}
