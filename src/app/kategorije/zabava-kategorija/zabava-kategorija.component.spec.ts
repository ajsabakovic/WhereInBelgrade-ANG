/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZabavaKategorijaComponent } from './zabava-kategorija.component';

describe('ZabavaKategorijaComponent', () => {
  let component: ZabavaKategorijaComponent;
  let fixture: ComponentFixture<ZabavaKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZabavaKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZabavaKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
