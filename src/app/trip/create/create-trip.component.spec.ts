import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockTrip } from 'src/app/MOCK_TRIP';
import { TripsService } from '../trips.service';
import { CreateTripComponent } from './create-trip.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateTripComponent', () => {
  let component: CreateTripComponent;
  let fixture: ComponentFixture<CreateTripComponent>;

  beforeEach(async () => {
    const tripServiceSpy = jasmine.createSpyObj<TripsService>(['createTrip']);
    tripServiceSpy.createTrip.and.returnValue(of(mockTrip ));

    await TestBed.configureTestingModule({
      declarations: [ CreateTripComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{provide: TripsService, useValue: tripServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create trip', () => {
    expect(component.currentTrip).not.toBeUndefined();
  });
  it('should to not have links', () => {
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(0);
  });

  it(' trip should have same price', () => {
    expect(component.currentTrip?.price).toEqual(20)
    console.log(component.currentTrip);
    
  });
});
