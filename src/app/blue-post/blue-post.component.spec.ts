/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePostComponent } from './blue-post.component';

describe('BluePostComponent', () => {
  let component: BluePostComponent;
  let fixture: ComponentFixture<BluePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
