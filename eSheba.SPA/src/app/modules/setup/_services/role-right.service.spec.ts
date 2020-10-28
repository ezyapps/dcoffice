/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleRightService } from './role-right.service';

describe('Service: RoleRight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleRightService]
    });
  });

  it('should ...', inject([RoleRightService], (service: RoleRightService) => {
    expect(service).toBeTruthy();
  }));
});
