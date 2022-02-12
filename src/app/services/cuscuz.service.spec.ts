import { TestBed } from '@angular/core/testing';

import { CuscuzService } from './cuscuz.service';

describe('CuscuzService', () => {
  let service: CuscuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuscuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
