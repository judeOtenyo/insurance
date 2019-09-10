import { Component, OnInit } from '@angular/core';
import { Product } from '../CLASSES/product';
import { ProductService } from '../SERVICES/product.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  showClass = 'show';
  products: Product[];
  constructor(private productServices: ProductService) {}

  ngOnInit() {
    this.products = this.productServices.productData;
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
