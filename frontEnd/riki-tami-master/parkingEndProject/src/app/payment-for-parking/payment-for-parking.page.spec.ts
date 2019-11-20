import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentForParkingPage } from './payment-for-parking.page';

describe('PaymentForParkingPage', () => {
  let component: PaymentForParkingPage;
  let fixture: ComponentFixture<PaymentForParkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentForParkingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentForParkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
