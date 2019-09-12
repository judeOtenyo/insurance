import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/CLASSES/product';
import { FormGroup, FormControl } from '@angular/forms';
import { Request } from 'src/app/CLASSES/request';
import { UserDataService } from 'src/app/SERVICES/user-data.service';
import { RequestService } from 'src/app/SERVICES/request.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  showClass = 'show';
  expectedReturn = 0;
  annualPayment = 0;
  investmentForm: FormGroup = new FormGroup({
    years: new FormControl(),
    contribution: new FormControl(),
  });
  generalForm: FormGroup = new FormGroup({
    value: new FormControl(),
    age: new FormControl(),
  });
  constructor(
    private user: UserDataService,
    private requestService: RequestService
  ) {}

  ngOnInit() {}
  toggleClass() {
    if (this.showClass === 'show') {
      this.showClass = '';
      return;
    }
    this.showClass = 'show';
    return;
  }
  calculateInvestment() {
    const form = this.investmentForm.value;
    this.expectedReturn = form.years * form.contribution * 12 * 1.3;
    return;
  }
  calculateGeneral() {
    let interest: number;
    const form = this.generalForm.value;
    if (form.age > 6) {
      interest = 0.06;
    } else {
      interest = 0.05;
    }
    this.annualPayment = form.value * interest;
    return;
  }
  submitInvestment() {
    // get user ID
    if (this.user.getUserId() === false) {
      alert('Please try Again');
    } else {
      // Prepare the request
      let req = new Request();
      req = Object.assign(
        {
          userId: this.user.getUserId(),
          productId: this.product.name,
        },
        this.investmentForm.value
      );
      this.submit(req);
    }
  }
  submitGeneral() {
    // get user ID
    if (this.user.getUserId() === false) {
      alert('Please try Again');
    } else {
      // Prepare the request
      let req = new Request();
      req = Object.assign(
        {
          userId: this.user.getUserId(),
          productId: this.product.name,
        },
        this.generalForm.value
      );
      this.submit(req);
      return;
    }
  }
  submit(request: Request) {
    request._id = Math.floor(Math.random() * 100000).toString();
    request.status = 'pending';
    this.requestService.newRequest(request);
    return;
  }
}
