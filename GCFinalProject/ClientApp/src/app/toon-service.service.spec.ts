import { TestBed } from '@angular/core/testing';

import { ToonServiceService } from './toon-service.service';

describe('ToonServiceService', () => {
  let service: ToonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
