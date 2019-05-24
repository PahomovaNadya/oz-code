import { Directive, HostBinding, HostListener } from '@angular/core'
@Directive({
    selector: '[appProduct]'
})
export class ProductDirective{
    @HostBinding('class.producted') isProducted = false;
    @HostListener('mouseenter') onclick() {
        this.isProducted = true;
    }
    @HostListener('mouseleave') onload() {
        this.isProducted = false;
    }
}