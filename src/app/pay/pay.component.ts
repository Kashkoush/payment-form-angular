import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PayService } from '../pay.service';
import { CreditCardValidators } from 'angular-cc-library';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  payForm: FormGroup;
  disabled: boolean = false;
  successMessage: string;
  failureMessage: string;

  constructor(private payService: PayService) { }

  ngOnInit(): void {
    this.payForm = new FormGroup({
      'cardHolder': new FormControl(null, Validators.required),
      'creditCardNumber': new FormControl(null, CreditCardValidators.validateCCNumber),
      'expirationDate': new FormControl(null, CreditCardValidators.validateExpDate),
      'securityCode': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
      'amount': new FormControl(null, Validators.required)
    })

  }

  payNow() {
    this.payForm.markAllAsTouched();
    this.failureMessage = '';
    this.successMessage = '';

    if (this.payForm.status === "VALID") {
      // Submit Form to Backend
      this.disabled = true;

      this.payService.payWithCreditCard(this.payForm.value).then((response: boolean) => {
        this.successMessage = 'Payment has been received successfully';
        this.disabled = false;

        this.payForm.reset();

      }, error => {
        this.failureMessage = 'Payment failed, please try again with a different card or check with your bank';
        this.disabled = false;
      })

    }

  }

}
