/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsertEventComponent } from './insert-event.component';

describe('InsertEventComponent', () => {
  let component: InsertEventComponent;
  let fixture: ComponentFixture<InsertEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
