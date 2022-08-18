import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: 'img[appImgError]'
})
export class ImgErrorDirective {

  //Flag Ecuador
  svgDefault: string = 'https://openmoji.org/data/color/svg/1F1EA-1F1E8.svg'

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('error')
  onError() {
    this.renderer.setAttribute(this.elementRef.nativeElement,
      'src',
      this.svgDefault)
  }

}
