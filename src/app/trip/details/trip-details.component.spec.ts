import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockTrip } from 'src/app/MOCK_TRIP';
import { TripsService } from '../trips.service';

import { TripDetailsComponent } from './trip-details.component';

describe('TripDetailsComponent', () => {
  let component: TripDetailsComponent;
  let fixture: ComponentFixture<TripDetailsComponent>;

  beforeEach(async () => {
    const tripServiceSpy = jasmine.createSpyObj<TripsService>(['getTrip']);
    tripServiceSpy.getTrip.and.returnValue(of(mockTrip));
    
    await TestBed.configureTestingModule({
      declarations: [ TripDetailsComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{provide: TripsService, useValue: tripServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have trip', () => {
    expect(component.currentTrip?.date).toBe("18.02.1988");
  });
});
