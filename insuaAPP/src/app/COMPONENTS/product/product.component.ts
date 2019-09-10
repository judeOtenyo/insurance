import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/CLASSES/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  showClass = 'show';
  constructor() {}

  ngOnInit() {}
  toggleClass() {
    if (this.showClass === 'show') {
      this.showClass = '';
      return;
    }
    this.showClass = 'show';
    return;
  }
}
