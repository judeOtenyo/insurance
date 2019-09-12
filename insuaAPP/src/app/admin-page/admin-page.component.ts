import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../SERVICES/product.service';
import { Request } from '../CLASSES/request';
import { RequestService } from '../SERVICES/request.service';
import { UserDataService } from '../SERVICES/user-data.service';
import { UserDetails } from '../CLASSES/user';
import { Product } from '../CLASSES/product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  addNew = false;
  requests: Request[] = [];
  mainItem: Request;
  newProductForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    desc: new FormControl(''),
  });
  constructor(
    public productService: ProductService,
    public requestService: RequestService,
    public userData: UserDataService
  ) {}
  ngOnInit() {
    const list = this.requestService.allRequests;
    this.requests = list.map(request => {
      // add user name
      request.user = this.userData.findUserById(request.userId)[0];
      // add product Name
      request.product = this.productService.findUserById(request.productId)[0];
      console.log(request);
      return request;
    });
  }
  submitProduct() {
    this.productService.newProduct(this.newProductForm.value);
    console.log(this.productService.productData);
    return;
  }
  displayItem(requestId) {
    this.mainItem = this.requestService.findUserById(requestId)[0];
    return;
  }
}
