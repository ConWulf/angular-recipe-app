import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.collapse') isOpen : boolean = true;
  @HostListener('click') toggleMenu() : void {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
