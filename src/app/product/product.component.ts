import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() item;
  isProductMarked = false;

  constructor(private appPage: AppComponent) { }

  editProduct(idProduct){
    this.isProductMarked = true;
    this.appPage.editProductApp(idProduct);
  }
  deleteProduct(idProduct) {
    if (confirm('Do you want to delete the Product?')) {
      this.appPage.deleteResult(idProduct);
    }
  }
	onProductLoad() {
		this.isProductMarked = false;
	}
}