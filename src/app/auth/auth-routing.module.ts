import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activated';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login Page',
      loginRequired: false,
    },
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
        title: 'Logout',
        loginRequired: true,
      },
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
        title: 'Register Page',
        loginRequired: false,
      },
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
        title: 'Porfile',
        loginRequired: true,
      },
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
