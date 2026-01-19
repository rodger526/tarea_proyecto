import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialProfesor } from './historial-profesor';

describe('HistorialProfesor', () => {
  let component: HistorialProfesor;
  let fixture: ComponentFixture<HistorialProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
