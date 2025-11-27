import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private eleRef:ElementRef){
    // console.log(this.eleRef.nativeElement);
    
  }
  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.backgroundImage') bgGradient: string = '';
  @HostListener('mouseenter') onEnter() {
    this.bgGradient = 'linear-gradient(to right, #24aeb1, #3ddad7)';
    this.bgColor = ''; 
  }
  
  @HostListener('mouseleave') onLeave() {
    this.bgGradient = '';
    this.bgColor = '#24aeb1'; 
  }
}


