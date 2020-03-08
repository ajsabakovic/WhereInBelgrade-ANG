/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinkPostComponent } from './pink-post.component';

describe('PinkPostComponent', () => {
  let component: PinkPostComponent;
  let fixture: ComponentFixture<PinkPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
