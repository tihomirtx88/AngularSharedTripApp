import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    this.authService.user = {
      email: 'tihomir@abv.bg'
    } as any;

    const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }

}
