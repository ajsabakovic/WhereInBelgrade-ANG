/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DogadjajService } from './dogadjaj.service';

describe('Service: Dogadjaj', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogadjajService]
    });
  });

  it('should ...', inject([DogadjajService], (service: DogadjajService) => {
    expect(service).toBeTruthy();
  }));
});
