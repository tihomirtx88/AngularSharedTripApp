import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
     

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule,FormsModule,RouterTestingModule,ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user', () => {
    expect(component.currentUser?._id).toBeUndefined();
  });

  it('should have user', () => {
    expect(component.currentUser!.email).toBe("asen@abv.bg");
  });
});
