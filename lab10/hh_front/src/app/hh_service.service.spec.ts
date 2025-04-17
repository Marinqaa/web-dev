// hh_service.service.spec.ts

import { TestBed } from '@angular/core/testing';

import { CompanyService } from './hh-service.service';

describe('HhServiceService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});