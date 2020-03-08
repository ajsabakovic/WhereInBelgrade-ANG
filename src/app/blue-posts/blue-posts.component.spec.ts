/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePostsComponent } from './blue-posts.component';

describe('BluePostsComponent', () => {
  let component: BluePostsComponent;
  let fixture: ComponentFixture<BluePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
