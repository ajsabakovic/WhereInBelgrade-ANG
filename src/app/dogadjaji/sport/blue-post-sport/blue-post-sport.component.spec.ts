/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePostSportComponent } from './blue-post-sport.component';

describe('BluePostSportComponent', () => {
  let component: BluePostSportComponent;
  let fixture: ComponentFixture<BluePostSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePostSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePostSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
