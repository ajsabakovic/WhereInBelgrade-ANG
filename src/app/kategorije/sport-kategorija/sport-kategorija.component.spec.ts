/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SportKategorijaComponent } from './sport-kategorija.component';

describe('SportKategorijaComponent', () => {
  let component: SportKategorijaComponent;
  let fixture: ComponentFixture<SportKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
