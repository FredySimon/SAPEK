import { TestBed } from '@angular/core/testing';

import { AsignacionCarrerasService } from './asignacion-carreras.service';

describe('AsignacionCarrerasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionCarrerasService = TestBed.get(AsignacionCarrerasService);
    expect(service).toBeTruthy();
  });
});
