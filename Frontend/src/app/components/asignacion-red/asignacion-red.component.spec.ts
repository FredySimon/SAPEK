import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRedComponent } from './asignacion-red.component';

describe('AsignacionRedComponent', () => {
  let component: AsignacionRedComponent;
  let fixture: ComponentFixture<AsignacionRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
