/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinkPostFestivaliComponent } from './pink-post-festivali.component';

describe('PinkPostFestivaliComponent', () => {
  let component: PinkPostFestivaliComponent;
  let fixture: ComponentFixture<PinkPostFestivaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPostFestivaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkPostFestivaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
