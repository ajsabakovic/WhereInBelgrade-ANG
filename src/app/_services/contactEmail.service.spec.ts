/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactEmailService } from './contactEmail.service';

describe('Service: ContactEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactEmailService]
    });
  });

  it('should ...', inject([ContactEmailService], (service: ContactEmailService) => {
    expect(service).toBeTruthy();
  }));
});
