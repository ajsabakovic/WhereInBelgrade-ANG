/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsJumbotronComponent } from './events-jumbotron.component';

describe('EventsJumbotronComponent', () => {
  let component: EventsJumbotronComponent;
  let fixture: ComponentFixture<EventsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
