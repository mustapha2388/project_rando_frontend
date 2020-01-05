import { TestBed } from '@angular/core/testing';

import { ImagesRepositoryService } from './images-repository.service';

describe('ImagesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesRepositoryService = TestBed.get(ImagesRepositoryService);
    expect(service).toBeTruthy();
  });
});
