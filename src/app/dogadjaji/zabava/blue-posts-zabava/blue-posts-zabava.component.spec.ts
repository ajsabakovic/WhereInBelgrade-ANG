/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePostsZabavaComponent } from './blue-posts-zabava.component.component';

describe('BluePostsZabavaComponent', () => {
  let component: BluePostsZabavaComponent;
  let fixture: ComponentFixture<BluePostsZabavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePostsZabavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePostsZabavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
