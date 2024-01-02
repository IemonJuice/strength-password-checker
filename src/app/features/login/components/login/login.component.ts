import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = inject(FormBuilder).group({
    username: [''],
    password: ['', [Validators.min(8)]],
  });

  isEasyPassword() {
    const easyPassword = /^[a-zA-Z]+$|^\d+$|^[^a-zA-Z\d\s]+$/;
    return easyPassword.test(this.form.getRawValue().password);
  }

  isMediumPassword() {
    const middlePassword = /^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d\s])|(?=.*\d)(?=.*[^a-zA-Z\d\s])/;
    return middlePassword.test(this.form.getRawValue().password);
  }

  isStrongPassword() {
    const strongPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])/;
    return strongPassword.test(this.form.getRawValue().password);
  }

  // imitation of the backend
  submitForm() {
    if (this.form.valid) {
      console.log(this.form.getRawValue())
    }
  }
}
