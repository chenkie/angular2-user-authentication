/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleguardService } from './roleguard.service';

describe('Service: Roleguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleguardService]
    });
  });

  it('should ...', inject([RoleguardService], (service: RoleguardService) => {
    expect(service).toBeTruthy();
  }));
});
