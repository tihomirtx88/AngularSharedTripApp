import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [FormsModule,RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('if email or password is in required state', () => {
     fixture.detectChanges();
     fixture.whenStable().then(() => {
        const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
        emailElement.value = 'tihomir@abv.bg';
        emailElement.dispatchEvent( new Event('input'));

        const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
        passwordElement.value = '777733';
        passwordElement.dispatchEvent( new Event('input'));

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const buttonElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#button');
          expect(buttonElement.disabled).toBeFalse();
          expect(component.form.get('email')?.value).toEqual('tihomir@abv.bg');
          expect(component.form.get('pass')?.get('password')?.value).toEqual('777733');
          expect(component.form.valid).toBe(true);
        });
     });
  });
});
