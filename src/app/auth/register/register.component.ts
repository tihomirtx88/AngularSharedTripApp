import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/match-passwords-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorFetchingData = false;

  form = this.formBuild.group({
    email: ['', [Validators.required, Validators.email]],
    pass: this.formBuild.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: []
    }, {
      validators: [matchPasswordGroupValidator('password', 'rePassword')]
    }),
    gender: ['', [Validators.required]]
  });

  constructor(private formBuild: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler(){
     if(this.form.invalid){return;}
     const { email, pass: {password, rePassword,} = {}, gender } = this.form.value;
     this.authService.register(email!, password!, rePassword!, gender!)
     .pipe(
      catchError((err) => {
        return throwError(() => new Error(err.message));
      }),
    )
     .subscribe({
      next: (value) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);         
      },
     });
  }

}
