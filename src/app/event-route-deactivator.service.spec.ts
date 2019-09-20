import { TestBed } from '@angular/core/testing';

import { EventRouteDeactivatorService } from './event-route-deactivator.service';

describe('EventRouteDeactivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRouteDeactivatorService = TestBed.get(EventRouteDeactivatorService);
    expect(service).toBeTruthy();
  });
});
