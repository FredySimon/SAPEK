import { TestBed } from '@angular/core/testing';

import { AsignacionCursosService } from './asignacion-cursos.service';

describe('AsignacionCursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionCursosService = TestBed.get(AsignacionCursosService);
    expect(service).toBeTruthy();
  });
});
