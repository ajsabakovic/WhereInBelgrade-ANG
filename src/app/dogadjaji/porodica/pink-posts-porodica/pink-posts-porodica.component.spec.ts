/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinkPostsPorodicaComponent } from './pink-posts-porodica.component';

describe('PinkPostsPorodicaComponent', () => {
  let component: PinkPostsPorodicaComponent;
  let fixture: ComponentFixture<PinkPostsPorodicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPostsPorodicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkPostsPorodicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
