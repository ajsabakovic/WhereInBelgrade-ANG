/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinkPostsComponent } from './pink-posts.component';

describe('PinkPostsComponent', () => {
  let component: PinkPostsComponent;
  let fixture: ComponentFixture<PinkPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
