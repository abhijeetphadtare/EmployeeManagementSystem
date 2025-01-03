import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsServiceService } from './employee-details-service.service';

describe('EmployeeDetailsServiceService', () => {
  let service: EmployeeDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
