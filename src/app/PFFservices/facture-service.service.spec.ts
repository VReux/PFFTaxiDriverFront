import { TestBed } from '@angular/core/testing';

import { FactureService } from './facture-service.service';

describe('FactureServiceService', () => {
  let service: FactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
