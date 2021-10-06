import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/auth/auth.service';
import { NoAuthService } from './service/no-auth/no-auth.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/component/login/login.module').then( m => m.LoginModule),
    canActivate: [NoAuthService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'user',
    loadChildren:()=> import ('../app/component/container/container.module').then(m=>m.ContainerModule),
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
