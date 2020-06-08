/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundListComponent } from './fund-list.component';

describe('FundListComponent', () => {
  let component: FundListComponent;
  let fixture: ComponentFixture<FundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
