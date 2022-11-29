import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form', {static: true}) form!: ElementRef<HTMLInputElement>

  constructor(private activateRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.authService.user = {
      email: 'tihomir@abv.bg'
    } as any;

    const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }

}
