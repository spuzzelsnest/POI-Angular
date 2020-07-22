import { TestBed } from '@angular/core/testing';

import { MediaSelectService } from './media-select.service';

describe('MediaSelectService', () => {
  let service: MediaSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
