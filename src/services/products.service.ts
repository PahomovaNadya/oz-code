import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IPproduct } from './../app/productIntr';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }
  public getJSON() {
    let products: Array<IPproduct> = [];
    products.push({
      idProduct: 0,
      name: "product 1",
      description: "text description test",
      imageUrl: "http://www.naddim.com/nadya/oz-code/images/pr1.jpg",
      price: 250
    });
    products.push({
      idProduct: 0,
      name: "product 2",
      description: "text2 description test2",
      imageUrl: "http://www.naddim.com/nadya/oz-code/images/pr2.jpg",
      price: 250
    });
    return products
  }
}