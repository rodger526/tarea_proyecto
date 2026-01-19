import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aceptacion } from './aceptacion';

describe('Aceptacion', () => {
  let component: Aceptacion;
  let fixture: ComponentFixture<Aceptacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aceptacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aceptacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
