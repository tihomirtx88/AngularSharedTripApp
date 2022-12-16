import { trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('form', {static: true}) form!: ElementRef<HTMLInputElement>

  currentUser: IUser | null = null;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  loginHandler(form: NgForm): void {
   
    if(form.invalid){return;}
    const { email, password } = form.value;
    this.authService.login(email!, password!)
    .pipe(
      catchError((err) => {
        return throwError(() => new Error(err.message));
      }),
    )
    .subscribe(user => {   
      this.authService.user = user;
      this.currentUser = user;
       localStorage.setItem("accessToken", user.accessToken);
       localStorage.setItem("user", JSON.stringify(user));
       this.router.navigate(['/']);
    });

    const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
