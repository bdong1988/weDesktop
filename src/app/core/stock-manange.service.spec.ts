import { TestBed, inject } from '@angular/core/testing';

import { StockManageService } from './stock-manage.service';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockManageService]
    });
  });

  it('should be created', inject([StockManageService], (service: StockManageService) => {
    expect(service).toBeTruthy();
  }));
});
