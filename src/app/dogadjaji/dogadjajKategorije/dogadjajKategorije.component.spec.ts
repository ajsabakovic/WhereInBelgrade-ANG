/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DogadjajKategorijeComponent } from './dogadjajKategorije.component';

describe('DogadjajKategorijeComponent', () => {
  let component: DogadjajKategorijeComponent;
  let fixture: ComponentFixture<DogadjajKategorijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogadjajKategorijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogadjajKategorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
