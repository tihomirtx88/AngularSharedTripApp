import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockTrips } from 'src/app/MOCK_TRIPS';
import { TripsService } from '../trips.service';
import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    const tripServiceSpy = jasmine.createSpyObj<TripsService>(['getAllTrips']);
    tripServiceSpy.getAllTrips.and.returnValue(of(mockTrips));

    await TestBed.configureTestingModule({
      declarations: [ CatalogComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: TripsService, useValue: tripServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('should have trips', () => {
    expect(component.trips?.length).toBe(1);
  });

  it('should have links', () => {
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(1);
  });
});
