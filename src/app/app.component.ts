import { Component } from '@angular/core';
import { ProductService } from './../services/products.service';
import { IPproduct } from './productIntr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  products: Array<IPproduct> = [];
  productInfoN: IPproduct[] = [];
  productInfoD: IPproduct[] = [];
  countArrPage: number = 3;
  itensCount: string[] = ["1","3","6","9","12","15"];
  countArr: number = 100;
  isDivVisible = false;
  selectProduct: IPproduct[] = [];
  isMarked = false;
  mySearchArr: IPproduct[];

  constructor(private productService: ProductService, private spinner: NgxSpinnerService){}

  ngOnInit() {
    if(window.location.search.replace('?','').split("=")[1]==="112233" || !localStorage.getItem('currentProducts')) {
      localStorage.removeItem('currentProducts');
      this.products = this.productService.getJSON();
      localStorage.setItem('currentProducts', JSON.stringify(this.products));
    } 
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.productInfoD = JSON.parse(localStorage.getItem('currentProducts'));
      this.countArr = this.productInfoD.length; 
      this.productInfoN = this.workPaginator(this.productInfoD, 0, this.countArrPage);
      this.isDivVisible = (this.productInfoD.length>0) ? true : false;
    }, 1000);
  }
  workPaginator(obj: IPproduct[], start: number, count: number): IPproduct[] {
    let newBookArr: Array<IPproduct> = [];
    let i=0;
    let numSrt = +start + (+count);
    obj.forEach((job) => {
      if ( i >= +start && i < numSrt) {
        newBookArr.push(obj[i]);
      }
      i++;
    }); 
    return newBookArr;
  }
  paginate(event) {
    this.productInfoN = this.workPaginator(this.productInfoD, event.first, event.rows);
  }
  selectItemCount(event: number){
    this.countArrPage = event;
    this.productInfoN = this.workPaginator(this.productInfoD, 0, event);
  }
  editProductApp(idProduct: number){
    this.selectProduct = this.productInfoN.filter(g => {
      if (g.idProduct === idProduct)
        return g;
      return false;
    });
    this.isMarked = true;
    this.selectProduct[0]["act"] = "edit";
  }
  addEditResult(itemResult: IPproduct[], act:string) {
    this.productInfoD = this.buildArray(act ,itemResult, JSON.parse(localStorage.getItem('currentProducts')));
    localStorage.setItem('currentProducts', JSON.stringify(this.productInfoD));
    this.productInfoN = this.workPaginator(this.productInfoD, 0, this.countArrPage);
    this.countArr = this.productInfoD.length;
    this.isMarked = false;
  }
  deleteResult(itemId: number) {
    if(this.productInfoN.length > 1) {
      let itemDelete = this.productInfoN.filter(g => {
        if (g.idProduct === itemId)
        return g;
        return false;
      });
      this.productInfoD = this.buildArray("delete" ,itemDelete, this.productInfoD);
      localStorage.setItem('currentProducts', JSON.stringify(this.productInfoD));
      this.productInfoN = this.workPaginator(this.productInfoD, 0, this.countArrPage);
      this.countArr = this.productInfoD.length; 
    }
  }
  clearMemory() {
    localStorage.removeItem('currentProducts');
    this.products = this.productService.getJSON();
    localStorage.setItem('currentProducts', JSON.stringify(this.products));
    this.productInfoD = JSON.parse(localStorage.getItem('currentProducts'));
    this.countArr = this.productInfoD.length; 
    this.productInfoN = this.workPaginator(this.productInfoD, 0, this.countArrPage);
    this.isDivVisible = (this.productInfoD.length>0) ? true : false;
  }
  addResult() {
    this.isMarked = true;
    this.selectProduct[0] = this.productInfoD[0];
    this.selectProduct[0]["act"] = "add";
    this.selectProduct[0]["idProduct"] = this.productInfoD.length;
    this.selectProduct[0]["name"] = "Product "+(this.productInfoD.length+1);
    this.selectProduct[0]["description"] = "";
    this.selectProduct[0]["imageUrl"] = "http://www.naddim.com/nadya/oz-code/images/pr1.jpg";
    this.selectProduct[0]["price"] = 250;
  }
  buildArray(str, items, products): IPproduct[] {
    switch(str) {
      case "edit":
        for(let i=0; i<products.length; i++){
          if(products[i].idProduct == items.idProduct){
            products[i] = items;
          }
        }
        break;
      case "add":
      products.push(items);
        break;
      case "delete":
        for(let i=0; i<products.length; i++){
          if(products[i].idProduct == items[0].idProduct){
            products.splice(i,1); 
          }
        }
        break;
    }
    return products;
  }
}