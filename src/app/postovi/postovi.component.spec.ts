/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostoviComponent } from './postovi.component';

describe('PostoviComponent', () => {
  let component: PostoviComponent;
  let fixture: ComponentFixture<PostoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
