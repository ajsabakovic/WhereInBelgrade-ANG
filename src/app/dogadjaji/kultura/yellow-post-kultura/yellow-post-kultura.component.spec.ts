/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowPostKulturaComponent } from './yellow-post-kultura.component';

describe('YellowPostKulturaComponent', () => {
  let component: YellowPostKulturaComponent;
  let fixture: ComponentFixture<YellowPostKulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPostKulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPostKulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
