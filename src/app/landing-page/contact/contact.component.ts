import { Component, inject } from '@angular/core';
import { ArrowComponent } from "../../shared/arrow/arrow.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from "../../shared/services/contact-service.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ArrowComponent, CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  readonly MIN_LENGTH = 4;
  readonly EMAIL_PATTERN = "[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}";
  http = inject(HttpClient);
  mailTest = false;
  showSendInfo = false;
  sendSuccess = false;

  post = {
    endPoint: 'https://xn--alexander-hrst-5pb.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  formData = {
    name: '',
    email: '',
    message: '',
    policy: false
  };

  formErrors = {
    name: false,
    email: false,
    message: false,
    policy: false
  };

  contactIcons = {
    email: {
      default: 'assets/img/email.svg',
      hover: 'assets/img/emailhover.svg',
      active: 'assets/img/emailactive.svg',
      isHovered: false,
      isActive: false
    },
    phone: {
      default: 'assets/img/phone_.svg',
      hover: 'assets/img/phone_hover.svg',
      active: 'assets/img/phone_active.svg',
      isHovered: false,
      isActive: false
    },
    policy: {
      isActive: false
    },
    legalnotice: {
      isActive: false
    }
  };

  checkboxState = {
    isChecked: false,
    isHovered: false,
    hasError: false
  };

  constructor(private contactService: ContactService) { }


  validateForm() {
    this.formErrors = { name: false, email: false, message: false, policy: false };
    let hasError = false;
    hasError = this.validateName();
    hasError = this.validateEmail();
    hasError = this.validateMessage();
    if (!this.formData.policy) {
      this.checkboxState.hasError = true;
      this.formErrors.policy = true;
      hasError = true;
    }
    return !hasError;
  }

  validateName() {
    if (this.formData.name.trim().length < this.MIN_LENGTH) {
      this.formErrors.name = true;
      return true;
    } else {
      return false;
    }
  }

  validateEmail() {
    if (!this.formData.email.match(this.EMAIL_PATTERN)) {
      this.formErrors.email = true;
      return true;
    } else {
      return false;
    }
  }

  validateMessage() {
    if (this.formData.message.trim().length < this.MIN_LENGTH) {
      this.formErrors.message = true;
      return true;
    } else {
      return false;
    }
  }

  onSubmit(ngForm: NgForm) {
    if (this.validateForm()) {
      if (ngForm.submitted && ngForm.form.valid) {
        this.http.post(this.post.endPoint, this.post.body(this.formData))
          .subscribe({
            next: (response) => { this.onSendMail(ngForm); },
            error: (error) => { this.onErrorSendMail();},
            complete: () => { this.onSendMail(ngForm); }
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        this.onSendMail(ngForm);
      }
    }
  }

  onSendMail(ngForm: NgForm) {
    this.sendSuccess = true;
    this.showSendInfo = true;
    this.toggleCheckbox();
    ngForm.resetForm();
    setTimeout(() => {
      this.showSendInfo = false;
    }, 3000);
  }

  onErrorSendMail() {
    this.sendSuccess = false;
    this.showSendInfo = true;
    setTimeout(() => {
      this.showSendInfo = false;
    }, 3000);
  }

  getCheckboxImage(): string {
    if (this.checkboxState.hasError) {
      return 'assets/img/checkbox-error.svg';
    }
    if (this.checkboxState.isChecked) {
      return 'assets/img/checkbox-checked.svg';
    }
    if (this.checkboxState.isHovered) {
      return 'assets/img/checkbox-hover.svg';
    }
    return 'assets/img/checkbox-default.svg';
  }

  toggleCheckbox() {
    this.checkboxState.isChecked = !this.checkboxState.isChecked;
    this.checkboxState.hasError = false;
    this.formData.policy = this.checkboxState.isChecked;
  }

  getContactImage(type: 'email' | 'phone'): string {
    if (this.contactIcons[type].isActive) {
      return this.contactIcons[type].active;
    }
    if (this.contactIcons[type].isHovered) {
      return this.contactIcons[type].hover;
    }
    return this.contactIcons[type].default;
  }

  getValidationIcon(field: 'name' | 'email' | 'message'): string {
    if (this.formData[field] && !this.formErrors[field]) {
      return 'assets/img/check_ok.svg';
    }
    if (this.formErrors[field]) {
      return 'assets/img/check_error.svg';
    }
    return '';
  }

  shouldShowIcon(field: 'name' | 'email' | 'message'): boolean {
    if (!this.formData[field]) return false;
    return this.formData[field].length > 0 || this.formErrors[field];
  }

  validateOnChange(field: 'name' | 'email' | 'message') {
    if (!this.formData[field]) return;
    switch (field) {
      case 'name':
        this.formErrors.name = this.formData.name.trim().length < this.MIN_LENGTH;
        break;
      case 'email':
        this.formErrors.email = !this.formData.email.match(this.EMAIL_PATTERN);
        break;
      case 'message':
        this.formErrors.message = this.formData.message.trim().length < this.MIN_LENGTH;
        break;
    }
  }

  onEmailClick() {
    this.contactService.sendEmail();
  }

  onPhoneClick() {
    this.contactService.callPhone();
  }
}