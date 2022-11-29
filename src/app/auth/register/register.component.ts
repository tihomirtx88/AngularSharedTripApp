import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  constructor(private formBuild: FormBuilder) { }

  registerHandler(){
    
  }

  ngOnInit(): void {
  }

}
