import { TestBed } from '@angular/core/testing';

import { AgenceService} from './agence-service.service';

describe('AgenceServiceService', () => {
  let service: AgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
