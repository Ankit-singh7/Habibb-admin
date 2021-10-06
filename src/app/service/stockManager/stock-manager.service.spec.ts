import { TestBed } from '@angular/core/testing';

import { StockManagerService } from './stock-manager.service';

describe('StockManagerService', () => {
  let service: StockManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
