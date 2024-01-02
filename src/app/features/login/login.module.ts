import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {routes} from "./routes";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
