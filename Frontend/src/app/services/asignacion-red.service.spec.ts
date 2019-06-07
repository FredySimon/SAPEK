import { TestBed } from '@angular/core/testing';

import { AsignacionRedService } from './asignacion-red.service';

describe('AsignacionRedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionRedService = TestBed.get(AsignacionRedService);
    expect(service).toBeTruthy();
  });
});
