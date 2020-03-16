/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WholeEventComponent } from './whole-event.component';

describe('WholeEventComponent', () => {
  let component: WholeEventComponent;
  let fixture: ComponentFixture<WholeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
