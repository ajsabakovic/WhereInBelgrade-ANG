/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KategorijaService } from './kategorija.service';

describe('Service: Kategorija', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KategorijaService]
    });
  });

  it('should ...', inject([KategorijaService], (service: KategorijaService) => {
    expect(service).toBeTruthy();
  }));
});
