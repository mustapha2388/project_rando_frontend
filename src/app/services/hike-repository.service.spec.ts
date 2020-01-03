import { TestBed } from '@angular/core/testing';

import { HikeRepositoryService } from './hike-repository.service';

describe('HikeRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HikeRepositoryService = TestBed.get(HikeRepositoryService);
    expect(service).toBeTruthy();
  });
});
