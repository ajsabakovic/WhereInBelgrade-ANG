/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavEventComponent } from './fav-event.component';

describe('FavEventComponent', () => {
  let component: FavEventComponent;
  let fixture: ComponentFixture<FavEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
