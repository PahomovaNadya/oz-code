import { Pipe, PipeTransform } from '@angular/core';
import { IPproduct } from './productIntr';

@Pipe({
    name: 'mySearch'
})
export class SearchPipe implements PipeTransform{
  filteredProductArr: IPproduct[];
  transform(products, value){
    this.filteredProductArr = products;
    if(value) {
      this.filteredProductArr = products.filter((product: IPproduct) => product.name.toLocaleLowerCase().includes(value));
    }
    return this.filteredProductArr;
  }
}