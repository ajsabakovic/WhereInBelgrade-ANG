/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowPostsComponent } from './yellow-posts.component';

describe('YellowPostsComponent', () => {
  let component: YellowPostsComponent;
  let fixture: ComponentFixture<YellowPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
