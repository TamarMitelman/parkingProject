import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserPage } from './add-new-user.page';

describe('AddNewUserPage', () => {
  let component: AddNewUserPage;
  let fixture: ComponentFixture<AddNewUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
