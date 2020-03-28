/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LikeEventService } from './like-event.service';

describe('Service: LikeEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeEventService]
    });
  });

  it('should ...', inject([LikeEventService], (service: LikeEventService) => {
    expect(service).toBeTruthy();
  }));
});
