import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../SERVICES/product.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  addNew = false;
  newProductForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    desc: new FormControl(''),
  });
  items = [5, 5, 5, 5, 8, 4, 8, 8, 8];
  constructor(private productService: ProductService) {}
  submitProduct() {
    this.productService.newProduct(this.newProductForm.value);
    console.log(this.productService.productData);
    return;
  }
  ngOnInit() {}
}
