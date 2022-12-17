import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockTrip } from 'src/app/MOCK_TRIP';
import { mockUser } from 'src/app/MOCK_USER';
import { TripsService } from '../trips.service';

import { TripDetailsComponent } from './trip-details.component';

fdescribe('TripDetailsComponent', () => {
  let component: TripDetailsComponent;
  let fixture: ComponentFixture<TripDetailsComponent>;

  beforeEach(async () => {
    const tripServiceSpy = jasmine.createSpyObj<TripsService>(['getTrip', 'getBudies']);
    tripServiceSpy.getTrip.and.returnValue(of(mockTrip));
    tripServiceSpy.getBudies.and.returnValue(of([mockUser]))
    
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

  it('should have any budies', () => {
    expect(component.currentTrip?.buddies.length).toBe(1);
  });
});
