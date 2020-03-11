/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowPostComponent } from './yellow-post.component';

describe('YellowPostComponent', () => {
  let component: YellowPostComponent;
  let fixture: ComponentFixture<YellowPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
