/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinkPostsFestivaliComponent } from './pink-posts-festivali.component';

describe('PinkPostsFestivaliComponent', () => {
  let component: PinkPostsFestivaliComponent;
  let fixture: ComponentFixture<PinkPostsFestivaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPostsFestivaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkPostsFestivaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
