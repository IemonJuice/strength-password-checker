import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = inject(FormBuilder).group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  });

  // imitation of the backend
  submitForm() {
    if(this.form.valid){
      console.log(this.form.getRawValue())
    }
  }
}
