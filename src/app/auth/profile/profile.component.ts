import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    // TODO
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
