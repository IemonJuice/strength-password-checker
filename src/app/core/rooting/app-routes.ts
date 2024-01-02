import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path:'login',loadChildren:() => import('../../features/login/login.module').then(m => m.LoginModule)},
  {path:'**',redirectTo:'login',pathMatch:'full'}
];
