import { TestBed, inject } from '@angular/core/testing';

import { UserManageServiceService } from './user-manage-service.service';

describe('UserManageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManageServiceService]
    });
  });

  it('should be created', inject([UserManageServiceService], (service: UserManageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
