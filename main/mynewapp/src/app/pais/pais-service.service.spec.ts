/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaisServiceService } from './pais-service.service';

describe('Service: PaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisServiceService]
    });
  });

  it('should ...', inject([PaisServiceService], (service: PaisServiceService) => {
    expect(service).toBeTruthy();
  }));
});
