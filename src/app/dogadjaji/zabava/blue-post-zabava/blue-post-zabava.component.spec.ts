/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePostZabavaComponent } from './blue-post-zabava.component';

describe('BluePostZabavaComponent', () => {
  let component: BluePostZabavaComponent;
  let fixture: ComponentFixture<BluePostZabavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePostZabavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePostZabavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
