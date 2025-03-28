import { Component, inject } from '@angular/core';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { ArrowComponent } from "../../shared/arrow/arrow.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ArrowComponent, CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  http = inject(HttpClient);

  mailTest = true;

  post = {
    endPoint: 'https://localhost/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  readonly MIN_LENGTH = 4;
  readonly EMAIL_PATTERN = "[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}";

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

  validateForm() {
    this.formErrors = {
      name: false,
      email: false,
      message: false,
      policy: false
    };

    let hasError = false;

    if (this.formData.name.trim().length < this.MIN_LENGTH) {
      this.formErrors.name = true;
      hasError = true;
    }
    if (!this.formData.email.match(this.EMAIL_PATTERN)) {
      this.formErrors.email = true;
      hasError = true;
    }
    if (this.formData.message.trim().length < this.MIN_LENGTH) {
      this.formErrors.message = true;
      hasError = true;
    }

    if (!this.formData.policy) {
      this.checkboxState.hasError = true;
      this.formErrors.policy = true;
      hasError = true;
    }

    return !hasError;
  }

  onSubmit(ngForm: NgForm) {
    if(this.validateForm()) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.formData))
          .subscribe({
            next: (response) => {

              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

        ngForm.resetForm();
      }
    }
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
      return 'assets/img/input-check.svg';
    }
    if (this.formErrors[field]) {
      return 'assets/img/input-error.svg';
    }
    return '';
  }

  shouldShowIcon(field: 'name' | 'email' | 'message'): boolean {
    return this.formData[field].length > 0 || this.formErrors[field];
  }
}