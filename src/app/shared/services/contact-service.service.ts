import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  private readonly EMAIL = 'hoerst.alexander@gmail.com';
  private readonly PHONE = '+4915752102518';
  private readonly SUBJECT = 'Kontaktanfrage';

  sendEmail() {
    window.location.href = `mailto:${this.EMAIL}?subject=${encodeURIComponent(this.SUBJECT)}`;
  }

  callPhone() {
    window.location.href = `tel:${this.PHONE}`;
  }

}
