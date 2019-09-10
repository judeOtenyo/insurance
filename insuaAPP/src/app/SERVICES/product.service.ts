import { Injectable } from '@angular/core';
import { Product } from '../CLASSES/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  productData: Product[] = [
    {
      name: 'Elimu',
      type: 'Investment',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicin…r officiis adipisci numquam aliquid quo. Officia.',
    },
    {
      name: 'Home',
      type: 'General',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicin…r officiis adipisci numquam aliquid quo. Officia.',
    },
  ];
  newProduct = (product: Product): boolean => {
    this.productData.push(product);
    return true;
  };
}
