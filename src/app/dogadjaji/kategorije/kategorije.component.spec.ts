import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KategorijeComponent } from './kategorije.component';

describe('KategorijeComponent', () => {
  let component: KategorijeComponent;
  let fixture: ComponentFixture<KategorijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
