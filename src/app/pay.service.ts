import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor() { }

  payWithCreditCard(body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500)
    })
  }

}
