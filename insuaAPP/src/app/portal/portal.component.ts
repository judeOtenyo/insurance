import { Component, OnInit } from '@angular/core';
import { Product } from '../CLASSES/product';
import { ProductService } from '../SERVICES/product.service';
import { Request } from '../CLASSES/request';
import { RequestService } from '../SERVICES/request.service';
import { UserDataService } from '../SERVICES/user-data.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  showClass = 'show';
  products: Product[];
  requests: Request[];
  constructor(
    private productServices: ProductService,
    public requestService: RequestService,
    public userData: UserDataService
  ) {}

  ngOnInit() {
    const user = this.userData.getUserId();

    this.products = this.productServices.productData;
    this.requests = this.requestService.allRequests.filter(
      request => request.userId === user
    );
    console.log(this.requests);
  }
  toggleClass() {
    if (this.showClass === 'show') {
      this.showClass = '';
      return;
    }
    this.showClass = 'show';
    return;
  }
}
