import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoComponent } from './country-info.component';

describe('CountryInfoComponent', () => {
  let component: CountryInfoComponent;
  let fixture: ComponentFixture<CountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
