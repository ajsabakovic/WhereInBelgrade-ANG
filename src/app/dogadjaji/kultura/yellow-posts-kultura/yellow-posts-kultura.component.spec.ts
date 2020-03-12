/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowPostsKulturaComponent } from './yellow-posts-kultura.component';

describe('YellowPostsKulturaComponent', () => {
  let component: YellowPostsKulturaComponent;
  let fixture: ComponentFixture<YellowPostsKulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPostsKulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPostsKulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
