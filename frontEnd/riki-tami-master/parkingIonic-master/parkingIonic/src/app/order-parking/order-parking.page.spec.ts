import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderParkingPage } from './order-parking.page';

describe('OrderParkingPage', () => {
  let component: OrderParkingPage;
  let fixture: ComponentFixture<OrderParkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderParkingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderParkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
