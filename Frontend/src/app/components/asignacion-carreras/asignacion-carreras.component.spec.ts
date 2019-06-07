import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCarrerasComponent } from './asignacion-carreras.component';

describe('AsignacionCarrerasComponent', () => {
  let component: AsignacionCarrerasComponent;
  let fixture: ComponentFixture<AsignacionCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
