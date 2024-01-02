import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {easyPassword, middlePassword, strongPassword} from "../../constants/pasword.patterns";




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
    return easyPassword.test(this.form.getRawValue().password);
  }

  isMediumPassword() {
    return middlePassword.test(this.form.getRawValue().password);
  }

  isStrongPassword() {
    return strongPassword.test(this.form.getRawValue().password);
  }

  // imitation of the backend
  submitForm() {
    if (this.form.valid) {
      console.log(this.form.getRawValue())
    }
  }
}
