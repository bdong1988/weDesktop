import { TestBed, inject } from '@angular/core/testing';

import { ProductManageService } from './product-manage.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductManageService]
    });
  });

  it('should be created', inject([ProductManageService], (service: ProductManageService) => {
    expect(service).toBeTruthy();
  }));
});
