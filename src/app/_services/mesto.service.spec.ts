/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MestoService } from './mesto.service';

describe('Service: Mesto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MestoService]
    });
  });

  it('should ...', inject([MestoService], (service: MestoService) => {
    expect(service).toBeTruthy();
  }));
});
