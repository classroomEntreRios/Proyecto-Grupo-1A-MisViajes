import { TestBed } from '@angular/core/testing';

import { ApiClimaService } from './api-clima.service';

describe('ApiClimaService', () => {
  let service: ApiClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
